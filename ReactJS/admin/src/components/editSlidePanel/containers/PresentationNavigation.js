import React, {Component} from "react";

import './editSlidPanel.css';

import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Pause from 'material-ui/svg-icons/av/pause';
import Play from 'material-ui/svg-icons/av/play-arrow';
import Next from 'material-ui/svg-icons/av/skip-next';
import Previous from 'material-ui/svg-icons/av/skip-previous';
import Forward from 'material-ui/svg-icons/av/fast-forward';
import Rewind from 'material-ui/svg-icons/av/fast-rewind';
import ContentSave from 'material-ui/svg-icons/content/save';

import {updateSlid, sendNavCmd} from "../../../actions";

class PresentationNavigation extends Component {

  render() {

    const {sendNavCmd, presentation} = this.props;

    return(
      <div className={"navigationButtons"}>
        <RaisedButton onClick={() => sendNavCmd("FIRST")}>
          <Previous />
        </RaisedButton>
        <RaisedButton onClick={() => sendNavCmd("PREVIOUS")}>
          <Rewind />
        </RaisedButton>
        <RaisedButton onClick={() => sendNavCmd("START", presentation)}>
          <Play />
        </RaisedButton>
        <RaisedButton onClick={() => sendNavCmd("STOP")}>
          <Pause />
        </RaisedButton>
        <RaisedButton onClick={() => sendNavCmd("NEXT")}>
          <Forward />
        </RaisedButton>
        <RaisedButton onClick={() => sendNavCmd("LAST")}>
          <Next />
        </RaisedButton>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    presentation: state.UpdateModelReducer.presentation
  }
}

export default connect(
  mapStateToProps, {sendNavCmd}
)(PresentationNavigation)