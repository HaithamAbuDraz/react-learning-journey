export function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + state.step };

    case "DECREMENT":
      return { ...state, count: state.count - state.step };

    case "RESET":
      return { ...state, count: 0 };

    case "SET_STEP":
      return { ...state, step: action.payload };

    case "INCREMENT_BY_STEP":
      return { ...state, count: state.count + state.step };

    case "DECREMENT_BY_STEP":
      return { ...state, count: state.count - state.step };

    default:
      return state;
  }
}