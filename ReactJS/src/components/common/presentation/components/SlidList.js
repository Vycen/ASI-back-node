import React, {Component} from 'react';
import '../containers/presentation.css'
import Slid from "../../slid/containers/Slid";

export default class SlidList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {slidArray, contentMap} = this.props;

    return(
      <div>
        {
          slidArray.map((slide, index) => {
            return <Slid key={index} slide={slide} displayMode={"SHORT"} contentMap={contentMap}/>
          })
        }
      </div>
    );
  }

}