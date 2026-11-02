# Challenge 04: Building a Multi-Metric Analytics Dashboard

* **Source Reference:** `src/challenges/04-state/StateChallenge.jsx (incorporating Dashboard.jsx, Counter.jsx, LikeButton.jsx, ToggleMessage.jsx)`
* **Note Title:** Building a Multi-Metric Analytics Dashboard
* **Learning Objective:** Manage multiple independent pieces of state and handle updater functions.
* **Summary:** Learners create an analytics dashboard tracking followers, posts, and likes independently. Each metric supports increments, decrements, and resets using functional state updates.
* **Step-by-Step Guidance:**
  1. Initialize three state variables: followers, posts, and likes.
  2. Build button controls for +1, -1, and reset for each metric.
  3. Use updater callbacks (prev) => prev + 1 to safely update values based on prior state.
  4. Verify all counters operate independently.
* **Key Concepts & APIs to Remember:** Multiple useState calls, updater callbacks setCount(prev => prev + 1), boolean toggling.
* **Minimal Code Example:**

```jsx
<button onClick={() => setFollowers(prev => prev + 1)}>+1</button>
```

* **Common Pitfalls & Debugging Tips:** Calling setCount(count + 1) multiple times in the same tick causes stale state bugs; always use functional updates when new state depends on prior state.
* **Suggested Practice Exercises / Quick Assessment:** Add a global "Reset All" button that clears all metrics at once.
* **Estimated Completion Time & Difficulty:** 35 minutes | Beginner
* **Recommended Prerequisites & Docs:** Lesson 04 | https://react.dev/learn/queueing-a-series-of-state-updates
