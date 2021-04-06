export const counterReducer = (state = 0, action) => {
  // when the app loads the reducer loads once to create the initial state for the app
  console.log("our action type is:", action.type);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
