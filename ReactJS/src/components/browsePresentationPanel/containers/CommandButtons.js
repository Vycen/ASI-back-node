import React, {Component} from "react";

import './browsePresentationPanel.css';

import {connect} from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentSave from 'material-ui/svg-icons/content/save';

import {updateSlid, sendNavCmd} from "../../../actions";


class CommandButtons extends Component {

  render() {

    const {updateSlid, selectedSlide, sendNavCmd} = this.props;

    return(
      <div className={"buttonFloatCommand"}>
        <FloatingActionButton mini onClick={() => updateSlid({add: true})}>
          <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton mini onClick={() => updateSlid({...selectedSlide, remove: true})}>
          <ContentRemove />
        </FloatingActionButton>
        <FloatingActionButton mini onClick={() => sendNavCmd('SAVE_CMD')}>
          <ContentSave />
        </FloatingActionButton>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    selectedSlide: state.SelectedReducer.selectedSlide
  }
}

export default connect(
  mapStateToProps, {updateSlid, sendNavCmd}
)(CommandButtons)