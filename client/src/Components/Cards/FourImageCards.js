import React from "react";
import "./Cards.css";

function FourImageCards(props) {
  return (
    <div className="cards4image">
      <h3>{props.title}</h3>
      <div className="cards4image__images">
        {props.data.length > 0 &&
          props.data.map((dt, index) => (
            <div className="card4image__sections" key={"cards" + index}>
              <img src={dt.link} alt="image__cl" />
              <p>{dt.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FourImageCards;
