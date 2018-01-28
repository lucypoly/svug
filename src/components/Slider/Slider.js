import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';

const PICTURES = [slider1, slider2, slider3];

class Slider extends Component {
  render() {
    return (
      <Carousel indicators={false} interval={4000} slide={true}>
        {PICTURES.map((pic, i) =>
          <Carousel.Item key={`pic-${i}`}>
            <img alt="slider" src={pic}/>
          </Carousel.Item>)}
      </Carousel>
    )
  }
}

export default Slider;
