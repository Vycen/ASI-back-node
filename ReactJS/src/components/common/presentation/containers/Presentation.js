import React, {Component} from 'react';
import './presentation.css'
import SlidList from "../components/SlidList";
import EditMetaPres from "../components/EditMetaPres";

export default class Presentation extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {presentation, contentMap} = this.props;

    return(
      <div>
        <EditMetaPres presentation={presentation}/>
        <SlidList slidArray={presentation.slidArray} contentMap={contentMap}/>
      </div>
    );
  }
}
