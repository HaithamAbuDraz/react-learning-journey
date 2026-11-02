# Lesson 15: Optimizing Component Renders with useMemo and React.memo

* **Source Reference:** `src/lessons/15-performance-optimization/PerformanceOptimizationLesson.jsx (incorporating ExpensiveCalculation, MemoizedButton, SearchList)`
* **Note Title:** Optimizing Component Renders with useMemo and React.memo
* **Learning Objective:** Prevent unnecessary child component re-renders and repeated heavy computations.
* **Summary:** React re-renders child components whenever their parent updates. React.memo skips re-rendering when props don't change, while useMemo caches the results of expensive calculations between renders.
* **Step-by-Step Guidance:**
  1. Identify slow computations or frequent child re-renders.
  2. Wrap heavy calculations in useMemo(() => compute(), [deps]).
  3. Wrap pure child components in React.memo().
  4. Verify cached values are reused when unrelated parent state updates.
* **Key Concepts & APIs to Remember:** React.memo(), useMemo(), render cycles, computation caching.
* **Minimal Code Example:**

```jsx
const filtered = useMemo(() => items.filter(i => i.price < max), [items, max]);
```

* **Common Pitfalls & Debugging Tips:** Premature optimization adds unnecessary complexity; only apply useMemo when computations are demonstrably slow or reference equality matters.
* **Suggested Practice Exercises / Quick Assessment:** Memoize an intensive loop calculation and observe render logs with and without useMemo.
* **Estimated Completion Time & Difficulty:** 45 minutes | Advanced
* **Recommended Prerequisites & Docs:** Lesson 04, Lesson 08 | https://react.dev/reference/react/useMemo
