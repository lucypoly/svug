import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpg';
import slider3 from '../../images/slider3.jpg';

class Slider extends Component {
  render() {
    return (
      <Carousel indicators={false} interval={4000} slide={true}>
        <Carousel.Item>
          <img src={slider1}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider2}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider3}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Slider;
