import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer d-flex justify-content-center align-items-end">
      <p className="text-center mt-5">Copyright &copy; Fitness Zone {year}.</p>
    </div>
  );
};

export default Footer;
