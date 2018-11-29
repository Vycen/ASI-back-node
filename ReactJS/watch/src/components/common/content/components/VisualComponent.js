import React, {Component} from "react";

class VisualComponent extends Component {

  renderFrame() {
    const {data} = this.props;

    return (
      <iframe className='frame' style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}} src={data.src} />
    )
  }

  renderVideo() {
    const {data} = this.props;

    return (
      <iframe className='frame' style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}} src={data.src + '?autoplay=1'} />
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

    if(data) {
      if(data.type === 'img' || data.type === 'img_url') {
        return this.renderImage();
      }
      else if(data.type === 'video') {
        return this.renderVideo()
      }
      else if (data.type === 'web') {
        return this.renderFrame()
      }
    }

    return null;

  }
}

export default VisualComponent;

