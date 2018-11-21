import {partClicked} from "../actions";

const reducer = (state, action) => {

  if (!state) {
    state = {

    };
  }


  switch (action.type) {

    case 'ROBOT_CLICKED':

      let selectedRobotParts = [];
      for(let part of state.robots.parts) {
        if(action.robot.parts.includes(part.id)) {
          selectedRobotParts.push(part);
        }
      }
      action.asyncDispatch(partClicked(null));

      return {
        ...state,
      };

    default:
      return {
        ...state
      }
  }

};


export default reducer;