import React, {Component} from "react";

import VisualComponent from './VisualComponent';

class LightContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {content} = this.props;

    return (
      <VisualComponent data={content} />
    )
  }
}

export default LightContent;