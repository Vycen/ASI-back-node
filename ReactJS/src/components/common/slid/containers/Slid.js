import React, {Component} from 'react';
import './slid.css'
import VisualComponent from "../../content/components/VisualComponent";
import EditMetaSlid from "../components/EditMetaSlid";


export default class Slid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {slide, displayMode, contentMap} = this.props;

    return(
      <div className="contentContainer">
        <span className='contentTitle'>{slide.title}</span>
        <span className='contentSubtitle'>{slide.txt}</span>
        <VisualComponent data={contentMap[slide.content_id]} />
        {
          displayMode === 'FULL_MNG' &&
          <EditMetaSlid />
        }
      </div>
    );
  }
}