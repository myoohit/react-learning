import React from 'react'

const Card = (props) => {

  return (
  <div className="parent">
  <div className="child">
    <div className="top">

      <img src={props.img} alt="" />
      <button>Save </button>
   
    </div>
    <div className="center">
        <div className="na">
                <h3>{props.company}</h3>
        <h5 >4 days ago</h5>
        </div>
        <div className="jobtitle">
            <h1>{props.job}</h1>
        </div>
        
        <div className="boxes">
            <div className="b1"><p>{props.time}</p></div>
            <div className="b1"><p>{props.level}</p></div>
        </div>
    </div>
    <div className="bottom">
<div className="price"><h3>₹{props.salary}/hr</h3></div>
<button>Apply Now</button>
    </div>
  </div>
</div>
  )
}

export default Card
