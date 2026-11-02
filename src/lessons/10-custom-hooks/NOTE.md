# Lesson 10: Encapsulating Reusable Logic with Custom Hooks

* **Source Reference:** `src/lessons/10-custom-hooks/CustomHooksLesson.jsx (incorporating useCounter.js, useFetch.js, Counter.jsx, UserList.jsx)`
* **Note Title:** Encapsulating Reusable Logic with Custom Hooks
* **Learning Objective:** Extract stateful component logic into reusable functions following React Hook conventions.
* **Summary:** Custom hooks let developers package state and lifecycle logic into standalone functions. Any function whose name starts with use can call other React hooks and be shared across multiple components.
* **Step-by-Step Guidance:**
  1. Identify repeated state or effect patterns (e.g. data fetching).
  2. Create a function named starting with use (e.g. useFetch).
  3. Move state and effects into the function.
  4. Return needed values or functions as an object or array.
* **Key Concepts & APIs to Remember:** Custom hook naming convention use..., logic abstraction, shared stateful behavior.
* **Minimal Code Example:**

```jsx
function useToggle(init = false) {
  const [v, setV] = useState(init);
  return [v, () => setV(!v)];
}
```

* **Common Pitfalls & Debugging Tips:** Hooks must only be called at the top level of React functions, never inside loops, conditions, or nested functions.
* **Suggested Practice Exercises / Quick Assessment:** Extract window resize tracking logic into a reusable useWindowSize() hook.
* **Estimated Completion Time & Difficulty:** 40 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 08, Lesson 09 | https://react.dev/learn/reusing-logic-with-custom-hooks
