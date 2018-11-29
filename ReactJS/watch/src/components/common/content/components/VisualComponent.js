import React, {Component} from "react";

class VisualComponent extends Component {

  renderFrame() {
    const {data} = this.props;

    return (
      <iframe style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='frame' src={data.src} />
    )
  }

  renderImage() {
    const {data} = this.props;

    return (
      <img style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}  className='image' src={data.src} />
    )
  }

  render() {

    const {data} = this.props;

    if(data && (data.type === 'img' || data.type === 'img_url')) {
      return this.renderImage();
    }
    else if(data && (data.type === 'video' || data.type === 'web')) {
      return this.renderFrame()
    }

    return null;

  }
}

export default VisualComponent;