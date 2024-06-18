import React, { useState } from "react";
import "./Card.css"; 

export default function Card({ img, title, details, price, rating }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: "15rem", border: "none", position: "relative" }}
    >
 
      <img
        className="card-img-top"
        src={img}
        alt="Card image cap"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{details}</p>
        <span className="card-price">{price}</span>
        <span className="card-rating">
          <svg
            width="15"
            height="12"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.60965 14.9435H3.61065Z"
              fill="#DF6951"
            />
          </svg>
          {rating}
        </span>
      </div>
      
  
      {isHovered && (
        <div className="card-popup">
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{details}</p>
            <span className="card-price">{price}</span>
            <span className="card-rating">
              <svg
                width="15"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.60965 14.9435H3.61065Z"
                  fill="#DF6951"
                />
              </svg>
              {rating}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
