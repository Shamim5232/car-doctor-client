import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-bold">{title}</h2>
        <p className="text-lg font-bold text-orange-500">Price: {price}</p>
        <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
