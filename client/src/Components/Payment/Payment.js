import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { db } from "../../firebase";
import axios from "axios";
import Address from "../Address/Address";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { getAddress } from "../../actions/addressAction";
import { createOrders } from "../../actions/paymentActions";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function Payment(props) {
  //UseDispatch works as passing getAddress to connect

  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [useAddress, setUserAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  //Stepper function

  //Use select works as mapStateToProps
  const userStore = useSelector((state) => {
    return state.auth;
  });
  const addressStore = useSelector((state) => state.address);
  const dispatchProps = useDispatch();

  ///HERE THE STEPPERS
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //function to get the address of the user
  useEffect(async () => {
    if (userStore.user.id) {
      dispatchProps(getAddress(userStore.user.id));
    }
  }, [userStore]);

  useEffect(() => {
    setUserAddress(addressStore.address);
  }, [addressStore]);
  useEffect(() => {
    //generates the new stripe secret whenever the baseket is updated to send request for updated price
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/createPaymentIntent?total=${parseInt(
          getBasketTotal(basket) * 100
        )}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (e) => {
    // do the fancy stripe changes
    e.preventDefault();
    if (!selectedAddress) {
      setProcessing(true);
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          //after payment confirmation
          const orderInfromation = {
            user: userStore.user.id,
            paymentId: paymentIntent.id,
            paymentAmount: getBasketTotal(basket),
            orders: basket,
            addressId: selectedAddress,
            created: new Date(),
          };
          dispatchProps(createOrders(orderInfromation, props.history));
          // db.collection("users")
          //   .doc(user?.uid)
          //   .collection("orders")
          //   .doc(clientSecret)
          //   .set({
          //     basket: basket,
          //     amount: getBasketTotal(basket),
          //     created: new Date(),
          //   });
          setSucceeded(true);
          setError(null);
          setProcessing(false);
        });
    } else {
      setError("Please select an address!");
    }
  };
  const handleChange = (e) => {
    //set the disabled form
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  //Select address card
  const selectAddressCard = (e) => {
    setSelectedAddress(e.target.id);
  };

  function getSteps() {
    return ["Select Delivery Address", "Review Cart", "Proceed Payment"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              {userStore.user.id && (
                <div className="payment__address_card">
                  <Link className="payment__link_address" to="/address">
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                    Add Address
                  </Link>
                </div>
              )}
              {useAddress.length > 0 &&
                useAddress.map((userAdd) => (
                  <div
                    className={`payment__address_card_details ${
                      selectedAddress === userAdd._id
                        ? "payment__address_selected_icon"
                        : ""
                    }`}
                    id={userAdd._id}
                    onClick={selectAddressCard}
                  >
                    {selectedAddress === userAdd._id && (
                      <img
                        src="https://i.ibb.co/j8yfBDS/check.png"
                        className="payment__selected_check"
                      />
                    )}
                    <p>{`${userAdd.area},${userAdd?.landmark}`}</p>
                    <p>{`${userAdd.city},${userAdd.state},${userAdd.country}`}</p>
                    <p>{`${userAdd.phone}`}</p>
                  </div>
                ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          Order Total : <strong>{`${value}`}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                  />
                  {userStore.user.id ? (
                    <button
                      type="submit"
                      disabled={processing || disabled || succeeded}
                    >
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  ) : (
                    <div className="payment__error">
                      Please login to continue!
                    </div>
                  )}
                </div>
                {/* Errors */}
                {error && <div className="payment__error">{error}</div>}
              </form>
            </div>
          </div>
        );
      default:
        return "Unknown step";
    }
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      {activeStep !== steps.length - 1 && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={`${classes.button} payment__stepper_button`}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </div>
    </div>
  );
}

Payment.propTypes = {
  getAddress: PropTypes.func.isRequired,
};

export default withRouter(Payment);
