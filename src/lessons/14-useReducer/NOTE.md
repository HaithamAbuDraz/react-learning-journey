# Lesson 14: Managing Predictable State Transitions with useReducer

* **Source Reference:** `src/lessons/14-useReducer/UseReducerLesson.jsx & reducer/counterReducer.js ("useReducer Lesson")`
* **Note Title:** Managing Predictable State Transitions with useReducer
* **Learning Objective:** Manage complex state transitions using actions, dispatchers, and pure reducer functions.
* **Summary:** When component state involves multiple sub-values or complex transition rules, useReducer provides cleaner architecture than useState. All updates are channeled through a central reducer function.
* **Step-by-Step Guidance:**
  1. Define action types (e.g. "INCREMENT", "DECREMENT").
  2. Write a pure reducer function: (state, action) => newState.
  3. Initialize the hook with const [state, dispatch] = useReducer(reducer, initial).
  4. Trigger state transitions with dispatch({ type: "INCREMENT" }).
* **Key Concepts & APIs to Remember:** useReducer(), reducer pure function, action object { type, payload }, dispatch().
* **Minimal Code Example:**

```jsx
function reducer(state, action) {
  switch(action.type) {
    case "INC": return state + 1;
    default: return state;
  }
}
```

* **Common Pitfalls & Debugging Tips:** Reducers must be pure functions; never perform side effects, API calls, or mutate state directly inside a reducer.
* **Suggested Practice Exercises / Quick Assessment:** Add a "RESET" action to the counter reducer that restores initial state.
* **Estimated Completion Time & Difficulty:** 40 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Switch statements, pure functions | https://react.dev/reference/react/useReducer
