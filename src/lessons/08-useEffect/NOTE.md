# Lesson 08: Synchronizing with External Systems Using useEffect

* **Source Reference:** `src/lessons/08-useEffect/UseEffectLesson.jsx (incorporating Clock.jsx, PageTitle.jsx, WindowWidth.jsx)`
* **Note Title:** Synchronizing with External Systems Using useEffect
* **Learning Objective:** Run side effects after component rendering and clean them up when unmounting.
* **Summary:** Side effects like timers, subscriptions, or document modifications belong inside the useEffect hook. The dependency array controls when effects re-run, and a returned cleanup function prevents resource leaks.
* **Step-by-Step Guidance:**
  1. Import useEffect from "react".
  2. Define the effect function with side effect operations.
  3. Specify dependencies in the second argument (empty [] for mount-only).
  4. Return a cleanup function to detach event listeners or timers.
* **Key Concepts & APIs to Remember:** useEffect(), dependency array, cleanup function, window.addEventListener().
* **Minimal Code Example:**

```jsx
useEffect(() => {
  document.title = count;
}, [count]);
```

* **Common Pitfalls & Debugging Tips:** Omitting dependencies used inside the effect causes stale closures; omitting cleanup functions leads to memory leaks and multiple active listeners.
* **Suggested Practice Exercises / Quick Assessment:** Create a component that logs window scroll position and removes the listener on unmount.
* **Estimated Completion Time & Difficulty:** 40 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Closures | https://react.dev/reference/react/useEffect
