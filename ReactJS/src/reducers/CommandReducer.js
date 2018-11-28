import Comm from "../services/Comm";
import Tools from "../services/Tools";
const comm = new Comm();

const uuid = Tools.generateUUID();
comm.socketConnection(uuid);


const reducer = (state, action) => {

  if (!state) {
    state = {
    };
  }


  switch (action.type) {

    case 'COMMAND_PRESENTATION':

      switch (action.action) {
        case "FIRST":
          comm.begin();
          break;
        case "PREVIOUS":
          comm.backward();
          break;
        case "START":
          comm.play(action.pres.id);
          break;
        case "STOP":
          comm.pause();
          break;
        case "NEXT":
          comm.forward();
          break;
        case "LAST":
          comm.end();
          break;
      }

      return {
        ...state,
        cmdPres: action.action
      };

    default:

      return {
        ...state
      }
  }

};


export default reducer;