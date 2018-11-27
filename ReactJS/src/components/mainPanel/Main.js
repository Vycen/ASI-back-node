import React, {Component} from 'react';
import './main.css';
import '../../lib/bootstrap-4.1.3-dist/css/bootstrap.min.css';

import {connect} from 'react-redux';
import {updateContentMap, updatePresentation} from '../../actions';

import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import Slid from "../common/slid/containers/Slid";
import Presentation from "../common/presentation/containers/Presentation";
import EditSlidePanel from "../editSlidePanel/containers/EditSlidPanel";

import Comm from '../../services/Comm';

class Main extends Component {

  componentDidMount() {
    const {updateContentMap, updatePresentation} = this.props;

    const comm = new Comm();

    comm.loadContent((contentMap) => {
      updateContentMap(contentMap);
    }, (e) => {
      console.error(e);
    });

    comm.loadPres('efa0a79a-2f20-4e97-b0b7-71f824bfe349', (pres) => {
      updatePresentation(pres);
    }, (e) => {
      console.error(e);
    });
  }

  render() {

    return (

      <div className='container-fluid height-100'>
        <div className="row height-100">
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
            <Presentation/>
          </div>
          <div className='col-md-6 col-lg-6 height-100 vertical-scroll'>
            <EditSlidePanel/>
          </div>
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
            <BrowseContentPanel/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  }
}

export default connect(
  mapStateToProps, {updateContentMap, updatePresentation}
)(Main)