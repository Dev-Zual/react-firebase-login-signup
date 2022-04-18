import React from 'react';
import './Service.css';
const Service = ({ pd }) => {
  const { id, name, picture, description, price } = pd;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Enroll Now</button>
          <span className="cart-price fs-3">
            <strong>{price}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
