import React, {Component} from "react";

import './browsePresentationPanel.css';

import {connect} from 'react-redux';
import Presentation from "../../common/presentation/containers/Presentation";
import CommandButtons from "./CommandButtons";

class BrowsePresentationPanel extends Component {

  render() {
    return(
      <div className={'height-100'}>
        <CommandButtons/>
        <Presentation/>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps, {}
)(BrowsePresentationPanel)