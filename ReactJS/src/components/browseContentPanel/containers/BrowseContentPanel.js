import React, {Component} from "react";

import './browseContentPanel.css';

import {connect} from 'react-redux';

import Content from '../../common/content/containers/Content';
import AddContentPanel from '../../addContentPanel/containers/AddContentPanel';


class BrowseContentPanel extends Component {

  render() {

    const {contentMap} = this.props;

    return (
      <div>
        {
         contentMap &&  Object.keys(contentMap).map((value, index) => {
            return <Content key={index} content={contentMap[value]} onlyContent={true}/>
          })
        }
        <AddContentPanel />
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