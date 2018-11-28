import {setSelectedSlid, contentAdded, sendNavCmd} from "../actions";
import Comm from "../services/Comm";
const comm = new Comm();

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

      action.asyncDispatch(sendNavCmd());

      return {
        ...state,
        presentation: {
          ...action.presentation
        }
      };

    case 'UPDATE_PRESENTATION_SLIDS':

      let pres = state.presentation;

      let newSlide = {
          id: Tools.generateUUID(),
          title: "",
          txt: "",
          contentMap: {
            "1": ""
          }
      };

      if(action.updatedSlide.add) {
        pres.slidArray.push(newSlide);
        action.asyncDispatch(setSelectedSlid(newSlide));
      }
      else {
        console.log(action.updatedSlide)

        let index = pres.slidArray.findIndex((slide) => {
          return slide.id === action.updatedSlide.id;
        });

        if(index > -1) {
          if(action.updatedSlide.remove) {
            pres.slidArray.splice(index, 1);

            action.asyncDispatch(setSelectedSlid(null));
          }
          else {
            pres.slidArray[index] = action.updatedSlide;
            action.asyncDispatch(setSelectedSlid(action.updatedSlide));
          }
        }

      }

      action.asyncDispatch(sendNavCmd());

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