import React, {Component} from 'react';
import './main.css';
import '../../lib/bootstrap-4.1.3-dist/css/bootstrap.min.css';

import {connect} from 'react-redux';
import {updateContent} from '../../actions';

import Content from "../common/content/containers/Content.js";
import Tools from "../../services/Tools";
import Comm from "../../services/Comm";

const comm = new Comm();

const uuid = Tools.generateUUID();


class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {updateContent} = this.props;

    comm.socketConnection(uuid, (content) => updateContent(content));
  }

  render() {

    const {currentContent} = this.props;

    return (

      <div className='container-fluid height-100'>
        <div className="row height-100">
          <div className='height-100' style={{display: 'flex', flex: 1}}>
            <Content onlyContent={true} content={currentContent}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    currentContent: state.UpdateContentReducer.currentContent
  }
}

export default connect(
  mapStateToProps, {updateContent}
)(Main)