import React, { Component } from 'react';
import './Carousel.css';
import { images } from '../data/CarouselData';
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

document.getElementById('');

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      img: images[0],
    };

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  left() {
    let newcount =
      this.state.count > 0 ? this.state.count - 1 : images.length - 1;
    this.setState({
      count: newcount,
      img: images[newcount],
    });
  }

  right() {
    let newcount =
      this.state.count < images.length - 1 ? this.state.count + 1 : 0;
    this.setState({
      count: newcount,
      img: images[newcount],
    });
  }

  render() {
    return (
      <div className="img-slider">
        <div className="left" onClick={this.left}>
          <ArrowBackIosIcon />
        </div>
        <h1>{this.state.img.title}</h1>
        <img src={this.state.img.img} />
        <div className="right" onClick={this.right}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    );
  }
}

export default Carousel;
