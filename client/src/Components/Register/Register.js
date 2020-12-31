import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import isEmpty from "../../validations/isEmpty";
import "./Register.css";
import validator from "validator";

function Register(props) {
  //usestate hooks from the react
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSeller, setSeller] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    if (validator.isEmpty(name)) {
      tempErrors.name = "Please enter name";
    }
    if (validator.isEmpty(mobile) || !validator.isInt(mobile)) {
      tempErrors.mobile = "Please enter mobile";
    }
    console.log(
      "!validator.isEmail(email)",
      !validator.isEmail(email),
      "\nvalidator.isEmail(email)",
      validator.isEmail(email)
    );
    if (validator.isEmpty(email) || !validator.isEmail(email)) {
      tempErrors.email = "Please enter email";
    }
    if (isEmpty(password)) {
      tempErrors.password = "Please enter password";
    }
    if (password && password.split("").length < 6) {
      tempErrors.password = "Password length should be greater than 6";
    }
    console.log("tempErrors", tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      const obj = {
        name: name,
        email: email,
        password: password,
        phone: parseInt(mobile),
        isSeller: isSeller,
      };
      props.registerUser(obj, props.history);
    } else {
      setErrors(tempErrors);
    }
  };
  return (
    <div className="register">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="login_logo"
        />
      </Link>
      <form>
        <div className="register__box">
          <h3>Create Account</h3>
          <div className=" register_format register__name_box">
            <label htmlFor="" className="reigster__name_label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register__name_input"
            />
            {errors.name && (
              <small className="register__validationErrors">
                {errors.name}
              </small>
            )}
          </div>
          <div className="register_format register__mobile_box">
            <label htmlFor="" className="register__mobile_label">
              Mobile
            </label>
            <input
              value={mobile}
              type="number"
              onChange={(e) => setMobile(e.target.value)}
              className="register__mobile_input"
            />
            {errors.mobile && (
              <small className="register__validationErrors">
                {errors.mobile}
              </small>
            )}
          </div>

          <div className="register_format register__email_box">
            <label htmlFor="" className="register__email">
              Email
            </label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="register_formatregister__email_input"
            />
            {errors.email && (
              <small className="register__validationErrors">
                {errors.email}
              </small>
            )}
          </div>
          <div className="register_format register__password_box">
            <label htmlFor="" className="register__password_label">
              Password
            </label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="register__password_input"
            />
            <p>Password must be greater than 6 digit</p>
            {errors.password && (
              <small className="register__validationErrors">
                {errors.password}
              </small>
            )}
          </div>
          <div className="register__seller">
            <input
              type="checkbox"
              value={isSeller}
              onClick={(e) => {
                setSeller(e.target.checked);
              }}
              className="register__checkbox"
            />
            <p>Register as a seller</p>
          </div>
          <div className="register_format register__confirmation_box">
            <button
              type="submit"
              onClick={onSubmit}
              className="confirmation__button"
            >
              Sign Up
            </button>
          </div>
          <div id="registerMessage"></div>
          <div className="register_format register__already">
            <p>Already have an account?</p>
            <Link to="/login">Sign in ➤</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
