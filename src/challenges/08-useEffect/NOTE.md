# Challenge 08: Creating an Accurate Real-Time Digital Clock

* **Source Reference:** `src/challenges/08-useEffect/UseEffectChallenge.jsx (incorporating DigitalClock.jsx, AutoCounter.jsx, BackgroundChanger.jsx)`
* **Note Title:** Creating an Accurate Real-Time Digital Clock
* **Learning Objective:** Manage recurring timers with setInterval and clean them up properly on unmount.
* **Summary:** Learners build a real-time digital clock that updates every second, formats time into 12-hour or 24-hour display, and cleans up its timer interval when removed from the screen.
* **Step-by-Step Guidance:**
  1. Initialize time state with new Date().
  2. Start setInterval inside useEffect to update time every 1000ms.
  3. Return () => clearInterval(interval) from the effect.
  4. Format hours, minutes, and seconds with zero-padding.
* **Key Concepts & APIs to Remember:** setInterval(), clearInterval(), String.padStart(2, "0"), mount cleanup.
* **Minimal Code Example:**

```jsx
useEffect(() => {
  const id = setInterval(() => setTime(new Date()), 1000);
  return () => clearInterval(id);
}, []);
```

* **Common Pitfalls & Debugging Tips:** Forgetting clearInterval causes timer instances to multiply each time the component re-renders.
* **Suggested Practice Exercises / Quick Assessment:** Add a toggle button allowing users to switch between 12-hour (AM/PM) and 24-hour formats.
* **Estimated Completion Time & Difficulty:** 35 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 08 | https://react.dev/learn/synchronizing-with-effects
