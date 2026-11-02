# Lesson 04: Managing Reactive State with useState

* **Source Reference:** `src/lessons/04-state/StateLesson.jsx & components/Counter.jsx ("State Lesson")`
* **Note Title:** Managing Reactive State with useState
* **Learning Objective:** Store and update changing component data using the useState hook.
* **Summary:** Regular variables reset when a component re-renders. The useState hook preserves data between renders and instructs React to update the user interface whenever values change.
* **Step-by-Step Guidance:**
  1. Import useState from "react".
  2. Declare state with array destructuring [count, setCount].
  3. Bind updater functions to button onClick events.
  4. Update state directly or with an updater callback.
* **Key Concepts & APIs to Remember:** useState(), state getter and setter pair, reactive UI re-rendering.
* **Minimal Code Example:**

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>+</button>
```

* **Common Pitfalls & Debugging Tips:** Mutating state directly like count++ fails to trigger a re-render. Always use the setter function.
* **Suggested Practice Exercises / Quick Assessment:** Add a step input that allows increasing the counter by custom increments.
* **Estimated Completion Time & Difficulty:** 30 minutes | Beginner
* **Recommended Prerequisites & Docs:** JavaScript array destructuring | https://react.dev/learn/state-a-components-memory
