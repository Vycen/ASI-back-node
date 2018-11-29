import React, {Component} from "react";

import './addContentPanel.css';

import {connect} from 'react-redux';

import {addContent} from "../../../actions";


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddContentPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      type: 'img',
      title: '',
      src: '',
      data: null,
      ext: null
    };
  }


  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({
      open: false,
      type: 'img',
      title: '',
      src: '',
      data: '',
    });
  };

  handleTypeChange(type){
    this.setState({type: type.target.value});
  };

  handleTitleChange(title){
    this.setState({title: title.target.value});
  };

  handleScrChange(src){
    this.setState({src: src.target.value});
  };

  handleFileChange(file){
    const fReader = new FileReader();
    this.setState({ext: file.target.files[0].type});
    fReader.readAsDataURL(file.target.files[0]);
    fReader.onloadend = (event) => {
      let data = event.target.result;
      this.setState({data: data.replace(/^data:image\/\w+;base64,/, "")});
      console.log(event.target.result);
    }
  };

  render() {

    const {title, type, src, open, data, ext} = this.state;
    const {addContent} = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.handleClose()}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onClick={() => {
          addContent({
            type,
            title,
            src,
            data,
            ext
          });
          this.handleClose()
        }}
      />,
    ];

    return (
      <div>
        <FloatingActionButton onClick={() => this.handleOpen()} className={"buttonFloatUid"}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add a new content"
          actions={actions}
          modal={true}
          open={open}
        >
          <div className={"dialogContent"}>
            <label for="titleInput">Title</label>
            <input value={title} id='titleInput' type={'text'} onChange={(ev) => this.handleTitleChange(ev)}/>
            <label for="typeInput">Content Type</label>
            <select value={type} id='typeInput' onChange={(ev) => this.handleTypeChange(ev)}>
              <option value="img">img</option>
              <option value="img_url">img_url</option>
              <option value="video">video</option>
              <option value="web">web</option>
            </select>
            {
              type === 'img' &&
              <div className={"dialogContent"}>
                <label for="fileInput">File</label>
                <input id='fileInput' type={'file'} accept={'image/*'} onChange={(ev) => this.handleFileChange(ev)}/>
              </div>
            }
            {
              type !== 'img' &&
              <div className={"dialogContent"}>
                <label for="urlInput">URL</label>
                <input value={src} id='urlInput' type={'text'} onChange={(ev) => this.handleScrChange(ev)}/>
              </div>
            }

          </div>
        </Dialog>
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
  mapStateToProps, {addContent}
)(AddContentPanel)