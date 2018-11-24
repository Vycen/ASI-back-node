import React, {Component} from 'react';
import '../containers/presentation.css'

import {connect} from 'react-redux';

import Slid from "../../slid/containers/Slid";

class SlidList extends Component {

  render() {

    const {presentation} = this.props;

    return(
      <div>
        {
          presentation && presentation.slidArray.map((slide, index) => {
            return <Slid key={index} slide={slide} displayMode={"SHORT"}/>
          })
        }
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
  mapStateToProps, {}
)(SlidList)