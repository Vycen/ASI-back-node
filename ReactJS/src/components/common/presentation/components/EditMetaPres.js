import React, {Component} from 'react';

import {connect} from 'react-redux';

import '../containers/presentation.css'

class EditMetaPres extends Component {

  render() {

    const {presentation, handleChangeTitle, handleChangeTxt} = this.props;

    return (
      <div>
        {
          presentation &&
          <div className="form-group">
            <label htmlFor="currentSlideTitle">Title </label>
            <input
              type="text"
              className="form-control"
              id="currentSlideTitle"
              onChange={(title) => handleChangeTitle(title)}
              value={presentation.title}
            />
            <label htmlFor="currentSlideText">Description</label>
            <textarea
              rows="5"
              type="text"
              className="form-control"
              id="currentSlideText"
              onChange={(txt) => handleChangeTxt(txt)}
              value={presentation.description}>
            </textarea>
          </div>
        }
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    presentation: state.UpdateModelReducer.presentation
  }
}

export default connect(
  mapStateToProps, {}
)(EditMetaPres)