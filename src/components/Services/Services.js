import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mt-5 text-primary mb-4">My Best Services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {service.map((pd) => (
          <Service key={pd.id} pd={pd}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
