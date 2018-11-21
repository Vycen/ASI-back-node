import React, {Component} from "react";

import './browseContentPanel.css';

import Content from '../../common/content/containers/Content';


export default class BrowseContentPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {contentMap} = this.props;

    return (
      <div>
        {
          Object.keys(contentMap).map((value, index) => {
            return <Content key={index} content={contentMap[value]}/>
          })
        }
      </div>
    )
  }
}