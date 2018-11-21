import React, {Component} from "react";

import VisualComponent from './VisualComponent';

class FullContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {content} = this.props;

    return (
      <div className="contentContainer">
        <VisualComponent data={content} />
        <span className='contentTitle'>{content.title}</span>
        <span className='contentSubtitle'>{"ID: " + content.id}</span>
      </div>
    )
  }

}

export default FullContent;