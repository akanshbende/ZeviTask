import React from "react";

function LatestTrendCard({ cardImg, cardImgTitle }) {
  return (
    <>
      <div className="card-wrapper">
        <div className="card-img">{cardImg}</div>
        <div className="card-img-title">{cardImgTitle}</div>
      </div>
    </>
  );
}

export default LatestTrendCard;
