import React, {Component} from 'react';
import './presentation.css'
import SlidList from "../components/SlidList";
import EditMetaPres from "../components/EditMetaPres";

export default class Presentation extends Component {

  render() {

    const {} = this.props;

    return(
      <div>
        <EditMetaPres />
        <SlidList />
      </div>
    );
  }
}
