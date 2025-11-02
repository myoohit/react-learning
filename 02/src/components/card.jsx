import React from "react";


const Card = (props) => {
    console.log(props.age)
  return (
    <div className="parent">
      <img
        src={props.src}
        alt="profile"
      />
      <div className="card">
        <h1>{props.user}</h1>
        <h2>{props.age}</h2>
      </div>
      <button>login</button>
    </div>
  );
};

export default Card;
