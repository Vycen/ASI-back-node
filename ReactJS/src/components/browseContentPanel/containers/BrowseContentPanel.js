import React, {Component} from "react";

import './browseContentPanel.css';

import {connect} from 'react-redux';

import Content from '../../common/content/containers/Content';


class BrowseContentPanel extends React.Component {

  render() {

    const {contentMap} = this.props;

    return (
      <div>
        {
         contentMap &&  Object.keys(contentMap).map((value, index) => {
            return <Content key={index} content={contentMap[value]}/>
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    contentMap: state.UpdateModelReducer.contentMap
  }
}

export default connect(
  mapStateToProps, {}
)(BrowseContentPanel)