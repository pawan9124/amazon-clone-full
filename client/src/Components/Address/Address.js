import React, { useEffect, useState } from "react";
import "./Address.css";
// import csc from "country-state-city";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addAddress } from "../../actions/addressAction";
import PropTypes from "prop-types";
import validator from "validator";

function Address(props) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [state, setState] = useState("");
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const [phone, setMobile] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandMark] = useState("");
  const [errors, setErrors] = useState({});
  const [csc, setCSC] = useState({});

  useEffect(async () => {
    const { default: lists } = await import("country-state-city");
    const csccountries = await lists.getAllCountries();
    setCountries(csccountries);
    setCSC(lists);
  }, []);

  const handleCountryChange = (e) => {
    console.log("CSC----", csc);
    const countryId = e.target.selectedOptions[0].id;
    const statesOfCountry = csc.getStatesOfCountry(countryId);
    setCountry(e.target.value);
    setStates(statesOfCountry);
  };
  const handleStateChange = (e) => {
    const stateId = e.target.selectedOptions[0].id;
    const citiesOfState = csc.getCitiesOfState(stateId);
    setState(e.target.value);
    setCities(citiesOfState);
  };

  //function to save the address
  const saveAddress = (e) => {
    e.preventDefault();
    const tempErrors = {};

    if (validator.isEmpty(country)) {
      tempErrors.country = "Please select a country";
    }
    if (validator.isEmpty(state)) {
      tempErrors.state = "Please select a state";
    }
    if (validator.isEmpty(city)) {
      tempErrors.city = "Please select a city";
    }
    if (validator.isEmpty(phone)) {
      tempErrors.phone = "Please enter mobile number";
    }
    if (validator.isEmpty(area)) {
      tempErrors.area = "Please enter an area";
    }
    if (Object.keys(tempErrors).length === 0) {
      const sendObj = {
        user: props.auth.user.id,
        country,
        state,
        city,
        phone,
        area,
        landmark,
      };
      props.addAddress(sendObj, props.history);
    } else {
      setErrors(tempErrors);
    }
  };

  return (
    <div className="address">
      <div className="address__header">
        <h3>Add a new address</h3>
        <p>
          Or pick up your packages at your convenience from our self-service
          locations.
        </p>
      </div>
      <form className="address_container">
        <div className="address__common address__countries">
          <label for="countries">Country/Region</label>

          <select
            name="countries"
            id="countries"
            onChange={handleCountryChange}
          >
            <option key={"h1"} value={""} id={"first"}></option>
            {countries.map((countryDetails) => (
              <option
                key={countryDetails.name + "h1"}
                value={countryDetails.name}
                id={countryDetails.id}
              >
                {countryDetails.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <small className="address__validationError">{errors.country}</small>
          )}
        </div>
        <div className="address__common address__state">
          <label for="state">State / Province / Region</label>

          <select name="state" id="state" onChange={handleStateChange}>
            <option key={"h1"} value={""} id={"first"}></option>
            {states.map((stateDetails) => (
              <option
                key={stateDetails.name + "h1"}
                value={stateDetails.name}
                id={stateDetails.id}
              >
                {stateDetails.name}
              </option>
            ))}
          </select>
          {errors.state && (
            <small className="address__validationError">{errors.state}</small>
          )}
        </div>
        <div className="address__common address__city">
          <label for="city">Town/City</label>

          <select
            name="city"
            id="city"
            onChange={(e) => setCity(e.target.value)}
          >
            <option key={"h1"} value={""} id={"first"}></option>
            {cities.map((cityDetails) => (
              <option
                key={cityDetails.name + "h1"}
                value={cityDetails.name}
                id={cityDetails.id}
              >
                {cityDetails.name}
              </option>
            ))}
          </select>
          {errors.city && (
            <small className="address__validationError">{errors.city}</small>
          )}
        </div>
        <div className="address__common address__mobileNumber">
          <label for="state">Mobile number</label>
          <input type="number" onChange={(e) => setMobile(e.target.value)} />
          {errors.phone && (
            <small className="address__validationError">{errors.phone}</small>
          )}
        </div>
        <div className="address__common address__area">
          <label for="state">Area, Colony, Street, Sector, Village</label>
          <input type="text" onChange={(e) => setArea(e.target.value)} />
          {errors.area && (
            <small className="address__validationError">{errors.area}</small>
          )}
        </div>
        <div className="address__common address__landMark">
          <label for="state">Landmark</label>
          <input type="text" onChange={(e) => setLandMark(e.target.value)} />
        </div>
        <div className="common__address address__saveButton">
          <button type="submit" onClick={saveAddress}>
            Add Address
          </button>
        </div>
      </form>
    </div>
  );
}

Address.propTypes = {
  addAddress: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  address: state.address,
  auth: state.auth,
});

export default connect(mapStateToProps, { addAddress })(withRouter(Address));
