import React, {Component} from 'react';
import './editMetaSlid.css'

export default class EditMetaSlid extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {title, txt, handleChangeTitle, handleChangeTxt} = this.props;

    return (
      <div className="form-group">
        <label htmlFor="currentSlideTitle">Title </label>
        <input
          type="text"
          className="form-control"
          id="currentSlideTitle"
          onChange={(title) => handleChangeTitle(title)}
          value={title}
        />
        <label htmlFor="currentSlideText">Text</label>
        <textarea
          rows="5"
          type="text"
          className="form-control"
          id="currentSlideText"
          onChange={(txt) => handleChangeTxt(txt)}
          value={txt}>
        </textarea>
      </div>
    );
  }
}