import React, {Component} from "react";

import './content.css'

import LightContent from '../components/LightContent';
import FullContent from '../components/FullContent';
import {connect} from "react-redux";
import {updateDraggedElt} from "../../../../actions";

class Content extends Component {

  drag(ev) {
    const {content, updateDraggedElt} = this.props;
    updateDraggedElt(content.id);
  }

  render() {

    const {content, onlyContent} = this.props;

    return (
      <div draggable={true} onDrag={(ev) => this.drag(ev)}>
        {onlyContent && <FullContent content={content}/>}
        {!onlyContent && <LightContent content={content}/>}
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
  mapStateToProps, {updateDraggedElt}
)(Content)