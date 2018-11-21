import React, {Component} from 'react';
import './main.css';
import '../../lib/bootstrap-4.1.3-dist/css/bootstrap.min.css';
import Content from "../common/content/containers/Content";
import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import Slid from "../common/slid/containers/Slid";
import Presentation from "../common/presentation/containers/Presentation";


export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentMap: require('../../data/contentMap'),
      presentation: require('../../data/pres')
    }
  }

  render() {

    const {contentMap, presentation} = this.state;

    return (

      <div className='container-fluid height-100'>
        <div className="row height-100">
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
            <Presentation presentation={presentation} contentMap={contentMap}/>
          </div>
          <div className='col-md-6 col-lg-6 height-100'>
          </div>
          <div className='col-md-3 col-lg-3 height-100'>
            <BrowseContentPanel contentMap={contentMap}/>
          </div>
        </div>
      </div>
    );
  }
}