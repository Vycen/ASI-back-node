import React, {Component} from 'react';
import './main.css';
import '../../lib/bootstrap-4.1.3-dist/css/bootstrap.min.css';

import {connect} from 'react-redux';
import {updateContentMap, updatePresentation} from '../../actions';

import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import Slid from "../common/slid/containers/Slid";
import Presentation from "../common/presentation/containers/Presentation";
import EditSlidePanel from "../editSlidePanel/containers/EditSlidPanel";

class Main extends Component {

  componentDidMount() {
    const {updateContentMap, updatePresentation} = this.props;

    updateContentMap(require('../../data/contentMap'));
    updatePresentation(require('../../data/pres'));
  }

  render() {

    return (

      <div className='container-fluid height-100'>
        <div className="row height-100">
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
            <Presentation/>
          </div>
          <div className='col-md-6 col-lg-6 height-100'>
            <EditSlidePanel/>
          </div>
          <div className='col-md-3 col-lg-3 height-100'>
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