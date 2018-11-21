import React, {Component} from 'react';
import '../containers/presentation.css'

export default class EditMetaPres extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {presentation, handleChangeTitle, handleChangeTxt} = this.props;

    return (
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
    );
  }
}