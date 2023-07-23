import React from "react";
import "./Card.css";

const Card = ({ author, image }) => {
  return (
    <>
      <div className="Card__Cont">
        <div className="img">
          <img src={image} alt="top-books" />
        <p style={{width:"50%",marginTop:"-50%"}} className="author__p">{author}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
