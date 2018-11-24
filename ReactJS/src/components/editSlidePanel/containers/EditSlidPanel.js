import React, {Component} from 'react';
import './editSlidPanel.css';
import Slid from "../../common/slid/containers/Slid";

import {connect} from 'react-redux';
import {updateSlid} from "../../../actions";

class EditSlidePanel extends Component {

  updateCurrentSlid(slide) {
    const {updateSlid} = this.props;

    updateSlid(slide)
  }

  render() {

    const {selectedSlide} = this.props;

    return (
      <div className={"height-100"}>
        {
          selectedSlide &&
          <Slid slide={selectedSlide} displayMode={"FULL_MNG"} updateCurrentSlide={(slide) => this.updateCurrentSlid(slide)}/>
        }
      </div>
    )

  }
}


function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    selectedSlide: state.SelectedReducer.selectedSlide
  }
}

export default connect(
  mapStateToProps, {updateSlid}
)(EditSlidePanel)