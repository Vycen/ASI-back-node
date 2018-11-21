import React, {Component} from "react";

class VisualComponent extends Component {

  renderFrame() {
    const {data} = this.props;

    return (
      <iframe className='frame' src={data.src} />
    )
  }

  renderImage() {
    const {data} = this.props;

    return (
      <img className='image' src={data.src} />
    )
  }

  render() {

    const {data} = this.props;

    if(data.type === 'img' || data.type === 'img_url') {
      return this.renderImage();
    }
    else if(data.type === 'video' || data.type === 'web') {
      return this.renderFrame()
    }

    return null;

  }
}

export default VisualComponent;