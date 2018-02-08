import React, { Component } from 'react';

class BookCover extends Component {
  state = {
    width: 128,
    height: '100%'
  };

  componentDidMount() {
    const component = this;
    const image = new Image();
    image.onload = function() {
      let width = this.width;
      let height = this.height;
      if (width / height < 128 / 200 && height !== 200) {
        width = 200 * width / height;
        height = 200;
      }
      else if (width / height > 128 / 200 && width !== 128) {
        height = 128 * height / width;
        width = 128;
      }
      component.setState({
        width,
        height
      });
    }
    image.src = this.props.thumbnail;
  }

  render() {
    return (
      <div className="book-cover" style={{
        width: this.state.width,
        height: this.state.height,
        backgroundImage: `url("${this.props.thumbnail}")`
      }}></div>
    );
  }
};

export default BookCover;
