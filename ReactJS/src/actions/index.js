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