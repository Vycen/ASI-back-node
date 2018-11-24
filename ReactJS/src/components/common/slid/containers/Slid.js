import React, {Component} from 'react';
import './slid.css'

import {connect} from 'react-redux';
import {setSelectedSlid} from '../../../../actions';

import VisualComponent from "../../content/components/VisualComponent";
import EditMetaSlid from "../components/EditMetaSlid";


class Slid extends Component {

  updateSelectedSlid() {
    const {slide, setSelectedSlid} = this.props;
    setSelectedSlid(slide);
  }

  render() {
    const {slide, displayMode, contentMap, updateCurrentSlide} = this.props;

    return (
      <div className="contentContainer" onClick={() => this.updateSelectedSlid()}>
        <span className='contentTitle'>{slide.title}</span>
        <span className='contentSubtitle'>{slide.txt}</span>
        {contentMap && <VisualComponent data={contentMap[slide.content_id]}/>}
        {
          displayMode === 'FULL_MNG' &&
          <EditMetaSlid slide={slide} updateCurrentSlide={updateCurrentSlide}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    contentMap: state.UpdateModelReducer.contentMap
  }
}

export default connect(
  mapStateToProps, {setSelectedSlid}
)(Slid)