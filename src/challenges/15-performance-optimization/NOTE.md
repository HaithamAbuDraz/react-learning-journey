# Challenge 15: Building a High-Performance Product Dashboard

* **Source Reference:** `src/challenges/15-performance-optimization/PerformanceOptimizationChallenge.jsx (incorporating ProductDashboard.jsx, HeavyCalculation.jsx, ProductSearch.jsx, TodoApp.jsx, TodoItem.jsx)`
* **Note Title:** Building a High-Performance Product Dashboard
* **Learning Objective:** Combine useMemo, useCallback, and React.memo to optimize high-volume list rendering.
* **Summary:** Learners build an optimized product dashboard. They cache prime number calculations with useMemo, stabilize event handlers with useCallback, and prevent re-rendering list items using React.memo.
* **Step-by-Step Guidance:**
  1. Memoize product filtering and statistics calculations with useMemo.
  2. Wrap item action handlers (e.g. handleToggle, handleDelete) in useCallback.
  3. Wrap item components (ProductItem, TodoItem) in React.memo.
  4. Test that toggling theme or unrelated counters does not re-render list items.
* **Key Concepts & APIs to Remember:** useCallback(), useMemo(), React.memo(), function reference equality.
* **Minimal Code Example:**

```jsx
const handleDelete = useCallback((id) => {
  setItems(prev => prev.filter(i => i.id !== id));
}, []);
```

* **Common Pitfalls & Debugging Tips:** Passing an inline arrow function as a prop to a React.memo component breaks memoization unless the function is wrapped in useCallback.
* **Suggested Practice Exercises / Quick Assessment:** Add a performance timer using console.time() to measure the render speed before and after memoization.
* **Estimated Completion Time & Difficulty:** 60 minutes | Advanced
* **Recommended Prerequisites & Docs:** Lesson 15 | https://react.dev/reference/react/useCallback
