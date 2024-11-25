import React from "react";

export const Card = ({title, imageUrl}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12`">
      <div className="cards mt-4">
        <img src={imageUrl} alt="" />
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default Card;
