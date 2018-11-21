import React, {Component} from "react";

import './content.css'

import LightContent from '../components/LightContent';
import FullContent from '../components/FullContent';

export default class Content extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {content} = this.props;

    //TODO
    return (
      <div>
        {!content.onlyContent && <FullContent content={content}/>}
        {/*{!content.onlyContent && <LightContent content={content}/>}*/}
      </div>
    )
  }
}