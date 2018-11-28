import React, {Component} from 'react';
import './main.css';
import '../../lib/bootstrap-4.1.3-dist/css/bootstrap.min.css';

import {connect} from 'react-redux';
import {updateContentMap, updatePresentation} from '../../actions';

import BrowseContentPanel from "../browseContentPanel/containers/BrowseContentPanel";
import Slid from "../common/slid/containers/Slid";
import BrowsePresentationPanel from "../browsePresentationPanel/containers/BrowsePresentationPanel";
import EditSlidePanel from "../editSlidePanel/containers/EditSlidPanel";

import Comm from '../../services/Comm';
import Tools from '../../services/Tools';

class Main extends Component {

  componentDidMount() {
    const {updateContentMap, updatePresentation} = this.props;

    this.comm = new Comm();

    this.comm.loadContent((contentMap) => {
      updateContentMap(contentMap);
    }, (e) => {
      console.error(e);
    });

    this.comm.loadPres('efa0a79a-2f20-4e97-b0b7-71f824bfe349', (pres) => {
      updatePresentation(pres);
    }, (e) => {
      console.error(e);
    });


  }

  componentDidUpdate(prevProps) {
    if(this.props.cmdPres === "SAVE_CMD" && prevProps.cmdPres !== "SAVE_CMD") {
      this.comm.savPres(this.props.presentation, (err) => console.error(err));
    }
  }

  render() {

    return (

      <div className='container-fluid height-100'>
        <div className="row height-100">
          <div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
            <BrowsePresentationPanel/>
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
    ...ownProps,
    cmdPres: state.CommandReducer.cmdPres,
    presentation: state.UpdateModelReducer.presentation

  }
}

export default connect(
  mapStateToProps, {updateContentMap, updatePresentation}
)(Main)