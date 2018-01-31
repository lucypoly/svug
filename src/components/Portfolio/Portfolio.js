import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import './Portfolio.css';

import img1 from '../../images/portfolio/img1.jpg';
import img2 from '../../images/portfolio/img2.jpg';
import img3 from '../../images/portfolio/img3.jpg';
import img4 from '../../images/portfolio/img4.jpg';
import img5 from '../../images/portfolio/img5.jpg';
import img6 from '../../images/portfolio/img6.jpg';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {currentImage: 0};
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };

  render() {
    return (
      <div className="container portfolio">
        <Gallery margin={5} photos={photos} onClick={this.openLightbox}/>
        <Lightbox images={photos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

const photos = [
  {
    src: img1,
    width: 2,
    height: 2
  },
  {
    src: img6,
    width: 4,
    height: 3
  },
  {
    src: img3,
    width: 2,
    height: 2
  },
  {
    src: img2,
    width: 4,
    height: 3
  },
  {
    src: img5,
    width: 2,
    height: 2
  },
  {
    src: img4,
    width: 4,
    height: 3
  }
];
export default Portfolio;