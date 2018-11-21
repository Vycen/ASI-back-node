
const reducer = (state, action) => {

  if (!state) {
    state = {
      selectedPart: undefined
    };
  }


  switch (action.type) {

    case 'PART_CLICKED':

      return {
        ...state,
        selectedPart: action.part
      };

    default:
      return {
        ...state
      }
  }

};


export default reducer;