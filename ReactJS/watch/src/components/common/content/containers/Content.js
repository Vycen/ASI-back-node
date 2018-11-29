import React, {Component} from "react";

import './content.css'

import LightContent from '../components/LightContent';
import FullContent from '../components/FullContent';
import {connect} from "react-redux";

class Content extends Component {

  render() {

    const {content, onlyContent} = this.props;

    return (
      <div style={{flex:1, display: 'flex', justifyContent: 'stretch', alignItems: 'stretch'}}>
        {!onlyContent && <FullContent content={content}/>}
        {onlyContent && <LightContent content={content}/>}
      </div>
    )
  }
}


function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps, {}
)(Content)