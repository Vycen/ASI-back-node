
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

    case 'UPDATE_DRAGGED_ELT':

      return {
        ...state,
        draggedElt: action.id
      };

    default:

      return {
        ...state
      }
  }

};


export default reducer;