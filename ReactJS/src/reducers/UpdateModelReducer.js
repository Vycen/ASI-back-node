import {setSelectedSlid} from "../actions";

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
        presentation: action.presentation
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
        contentMap: action.contentMap
      };

    case 'ADD_CONTENT':
      return; //TO DO

    default:
      return {
        ...state
      }
  }

};


export default reducer;