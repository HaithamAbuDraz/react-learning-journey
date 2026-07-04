export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        errors: {
          ...state.errors,
          [action.payload.field]: "",
        },
      };

    case "RESET_FORM":
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        errors: {},
        submitted: false,
      };

    case "VALIDATE_FORM": {
      const errors = {};
      if (!state.name.trim()) errors.name = "Name is required";
      if (!state.email.trim()) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(state.email))
        errors.email = "Email is invalid";
      if (!state.password.trim()) errors.password = "Password is required";
      else if (state.password.length < 6)
        errors.password = "Password must be at least 6 characters";

      return {
        ...state,
        errors,
        submitted: Object.keys(errors).length === 0,
      };

    }

    default:
      return state;
  }

}