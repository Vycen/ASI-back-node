export const robotClicked = (robot) => {
  return {
    type: 'ROBOT_CLICKED', robot
  }
};

export const partClicked = (part) => {
  return {
    type: 'PART_CLICKED', part
  }
};