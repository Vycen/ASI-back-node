import React, {Component} from 'react';
import './editMetaSlid.css'

export default class EditMetaSlid extends Component {

  handleChangeTitle(title) {
    const {updateCurrentSlide, slide} = this.props;
    updateCurrentSlide({
      ...slide,
      title: title.target.value
    })
  }

  handleChangeTxt(txt) {
    const {updateCurrentSlide, slide} = this.props;
    updateCurrentSlide({
      ...slide,
      txt: txt.target.value
    })
  }

  render() {

    const {slide} = this.props;

    return (
      <div className="form-group">
        <label htmlFor="currentSlideTitle">Title</label>
        <input
          type="text"
          className="form-control"
          id="currentSlideTitle"
          onChange={(title) => this.handleChangeTitle(title)}
          value={slide.title}
        />
        <label htmlFor="currentSlideText">Text</label>
        <textarea
          rows="5"
          type="text"
          className="form-control"
          id="currentSlideText"
          onChange={(txt) => this.handleChangeTxt(txt)}
          value={slide.txt}>
        </textarea>
      </div>
    );
  }
}