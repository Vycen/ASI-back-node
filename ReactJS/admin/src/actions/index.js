export const setSelectedSlid = (selectedSlide) => {
  return {
    type: 'UPDATE_SELECTED_SLID',
    selectedSlide
  };
};

export const updateContentMap = (contentMap) => {
  return {
    type: 'UPDATE_CONTENT_MAP',
    contentMap
  };
};

export const updatePresentation = (presentation) => {
  return {
    type: 'UPDATE_PRESENTATION',
    presentation
  };
};

export const updateSlid = (updatedSlide) => {
  return {
    type: 'UPDATE_PRESENTATION_SLIDS',
    updatedSlide
  };
};

export const updateDraggedElt = (id) => {
  return {
    type: 'UPDATE_DRAGGED_ELT',
    id
  };
};

export const addContent = (content) => {
  return {
    type: 'ADD_CONTENT',
    content
  };
};

export const contentAdded = (newContent) => {
  return {
    type: 'CONTENT_ADDED',
    newContent
  };
};

export const sendNavCmd = (action, pres) => {
  return {
    type: 'COMMAND_PRESENTATION',
    action,
    pres
  };
};