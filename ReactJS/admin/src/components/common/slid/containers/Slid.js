import React, {Component} from 'react';
import './slid.css'

import {connect} from 'react-redux';
import {setSelectedSlid, updateSlid} from '../../../../actions';

import VisualComponent from "../../content/components/VisualComponent";
import EditMetaSlid from "../components/EditMetaSlid";


class Slid extends Component {

  updateSelectedSlid() {
    const {slide, setSelectedSlid} = this.props;
    setSelectedSlid(slide);
  }

  drop(ev) {
    const {updateSlid, slide, draggedElt} = this.props;
    updateSlid({
      ...slide,
      contentMap: {
        "1": draggedElt
      }
    });
  }

  onDragOver(ev) {
    ev.stopPropagation();
    ev.preventDefault();
  }

  render() {
    const {slide, displayMode, contentMap, updateSlid} = this.props;

    return (
      <div className="contentContainer" onClick={() => this.updateSelectedSlid()} onDrop={(ev) => this.drop(ev)} onDragOver={(ev) => this.onDragOver(ev)}>
        <span className='contentTitle'>{slide.title}</span>
        <span className='contentSubtitle'>{slide.txt}</span>
        {contentMap && slide.contentMap && Object.keys(slide.contentMap).length > 0 && <VisualComponent data={contentMap[slide.contentMap["1"]]}/>}
        {
          displayMode === 'FULL_MNG' &&
          <EditMetaSlid slide={slide} updateCurrentSlide={updateSlid}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    contentMap: state.UpdateModelReducer.contentMap,
    draggedElt: state.SelectedReducer.draggedElt
  }
}

export default connect(
  mapStateToProps, {setSelectedSlid, updateSlid}
)(Slid)