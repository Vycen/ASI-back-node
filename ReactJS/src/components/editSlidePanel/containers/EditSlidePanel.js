import React, {Component} from 'react';
import './editSlidePanel.css.css';
import Slid from "../../common/slid/containers/Slid";

export default class EditSlidePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {selectedSlide, contentMap} = this.props;

    return (
      <Slid selectedSlide={selectedSlide} contentMap={contentMap}/>
    )

  }
}