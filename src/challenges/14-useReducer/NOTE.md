# Challenge 14: Implementing Complex Reducer Logic for Carts and Forms

* **Source Reference:** `src/challenges/14-useReducer/UseReducerChallenge.jsx (incorporating CartApp.jsx, TodoApp.jsx, StepCounter.jsx, FormApp.jsx)`
* **Note Title:** Implementing Complex Reducer Logic for Carts and Forms
* **Learning Objective:** Structure multi-action reducers handling payload data and complex business logic.
* **Summary:** Learners create production-grade reducers for a shopping cart, todo list, and registration form. Each reducer processes distinct action types with payloads to handle add, remove, filter, and validation logic.
* **Step-by-Step Guidance:**
  1. Build cartReducer supporting ADD_ITEM, REMOVE_ITEM, INCREASE_QTY, and CLEAR_CART.
  2. Ensure non-matching items are preserved during array mapping.
  3. Build a todo reducer supporting filtering and toggles.
  4. Connect reducers to UI components via dispatch.
* **Key Concepts & APIs to Remember:** Action payloads, immutable state updates in reducers, action type constants.
* **Minimal Code Example:**

```jsx
dispatch({ type: "ADD_ITEM", payload: product });
```

* **Common Pitfalls & Debugging Tips:** Forgetting the default: return state; branch causes state to become undefined when unknown actions fire.
* **Suggested Practice Exercises / Quick Assessment:** Add an action to todoReducer that marks all active todos as completed in one operation.
* **Estimated Completion Time & Difficulty:** 60 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 14 | https://react.dev/learn/extracting-state-logic-into-a-reducer
