import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import './Slider.css';
const Slider = () => {
  return (
    <div className="container mt-3">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h1>KEEP YOUT BODY FIT & STRONG</h1>
            <p>WITH MD. ZUAL RANA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />

          <Carousel.Caption>
            <h1>HACK OF A BODY LIKE MD. ZUAL RANA</h1>
            <p>EXERCICE SMARTER, FEEL BETTER. LIVE LONGER</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>BECOME YOUR STRONGEST SELF</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
