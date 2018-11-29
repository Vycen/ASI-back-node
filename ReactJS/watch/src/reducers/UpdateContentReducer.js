const reducer = (state, action) => {

  if (!state) {
    state = {
    };
  }


  switch (action.type) {

    case 'UPDATE_CONTENT':

      console.log(action);
      return {
        ...state,
        currentContent: action.content
      };

    default:

      return {
        ...state
      }
  }

};


export default reducer;