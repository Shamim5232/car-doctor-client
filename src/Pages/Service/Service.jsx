import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [Service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <>
      <div className="text-center space-y-3 mb-6">
        <h2 className="text-2xl font-bold text-orange-500 text-center">
          Service
        </h2>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="lg:w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Service.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Service;
