import React from "react";

function AdDisplayCard(props) {
  return (
    <div className={`addisplaycard ${props.className}`}>
      <div className="addisplaycard__title">
        <h3>{props.title}</h3>
      </div>
      <div className="addisplaycar__content">
        {props.type === "image" && <img src={props.image} alt="imagepr" />}
        {props.type === "text" && <p>{props.text}</p>}
      </div>
      {props.link && (
        <a href="#" className="addisplaycard__link">
          {props.link}
        </a>
      )}
    </div>
  );
}

export default AdDisplayCard;
