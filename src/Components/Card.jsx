import React from 'react';


const Card = ({ title, price, features }) => {
  return (
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {title}
        </h5>
        <h6 className="card-price text-center">
          {price}
          <span className="period">/month</span>
        </h6>
        <hr />
        <ul className="fa-ul">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} text={feature.text} />
          ))}
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">
            Button
          </a>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }) => (
  <li>
    <span className="fa-li">
      <i className={icon}></i>
    </span>
    {text}
  </li>
);

export default Card;
