import React, {Component} from 'react';
import './presentation.css'
import SlidList from "../components/SlidList";
import EditMetaPres from "../components/EditMetaPres";

export default class Presentation extends Component {

  render() {

    const {} = this.props;

    return(
      <div style={{marginTop: 20}}>
        <EditMetaPres />
        <SlidList />
      </div>
    );
  }
}
