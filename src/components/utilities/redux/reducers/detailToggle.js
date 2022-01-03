const descriptionToggleReducer = (state = false, action) => {
  switch (action.type) {
    case 'toggleDescription':
      return !state;
    default:
      return state;
  }
};
export default descriptionToggleReducer;
