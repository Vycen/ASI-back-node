
const reducer = (state, action) => {

  if (!state) {
    state = {
      selectedSlide: undefined
    };
  }


  switch (action.type) {

    case 'UPDATE_SELECTED_SLID':

      return {
        ...state,
        selectedSlide: action.selectedSlide
      };

    default:

      return {
        ...state
      }
  }

};


export default reducer;