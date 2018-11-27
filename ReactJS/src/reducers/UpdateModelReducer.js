import {setSelectedSlid, contentAdded} from "../actions";
import Comm from "../services/Comm";

const Tools = require('../services/Tools.js');

const reducer = (state, action) => {

  if (!state) {
    state = {
      presentation: undefined,
      contentMap: undefined,
      updatedSlide: undefined
    };
  }


  switch (action.type) {

    case 'UPDATE_PRESENTATION':
      return {
        ...state,
        presentation: {
          ...action.presentation
        }
      };

    case 'UPDATE_PRESENTATION_SLIDS':

      let pres = state.presentation;

      let index = pres.slidArray.findIndex((slide) => {
        return slide.id === action.updatedSlide.id;
      });

      if(index > -1) {
        pres.slidArray[index] = action.updatedSlide;
      }

      action.asyncDispatch(setSelectedSlid(action.updatedSlide));

      return {
        ...state,
        presentation: {
          ...pres
        }
      };

    case 'UPDATE_CONTENT_MAP':

      return {
        ...state,
        contentMap: {
          ...action.contentMap
        }
      };

    case 'ADD_CONTENT':

      const comm = new Comm();

      let id = Tools.generateUUID();

      let fileContent = {};

      if(action.content.type === 'img') {
        fileContent = {
          fileName: id + action.content.ext.replace("image/", '.'),
          src: "/contents/" + id,
          data: action.content.data
        }
      }

      let newContent = {
        id: id,
        src: action.content.src,
        type: action.content.type,
        title: action.content.title,
        ...fileContent
      };

      comm.savContent(newContent,
        (resp) => {
          action.asyncDispatch(contentAdded(resp.data))
        },
        (err) => {
          console.error(err);
        });


      return {
        ...state
      };

    case 'CONTENT_ADDED':

      console.log(action.newContent);

      return {
        ...state,
        contentMap: {
          ...state.contentMap,
          [action.newContent.id]: action.newContent
        }
      };

    default:
      return {
        ...state
      }
  }

};


export default reducer;