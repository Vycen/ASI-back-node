import React, {Component} from 'react';

import {connect} from 'react-redux';

import {updatePresentation} from "../../../../actions";

import '../containers/presentation.css'

class EditMetaPres extends Component {

  handleChangeTitle(title) {
    const {updatePresentation, presentation} = this.props;
    updatePresentation({
      ...presentation,
      title: title.target.value
    })
  }

  handleChangeDesc(desc) {
    const {updatePresentation, presentation} = this.props;
    updatePresentation({
      ...presentation,
      description: desc.target.value
    })
  }


  render() {

    const {presentation} = this.props;

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
              onChange={(title) => this.handleChangeTitle(title)}
              value={presentation.title}
            />
            <label htmlFor="currentSlideText">Description</label>
            <textarea
              rows="5"
              type="text"
              className="form-control"
              id="currentSlideText"
              onChange={(desc) => this.handleChangeDesc(desc)}
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
  mapStateToProps, {updatePresentation}
)(EditMetaPres)