# Challenge 10: Building Input, Toggle, and LocalStorage Utility Hooks

* **Source Reference:** `src/challenges/10-custom-hooks/CustomHooksChallenge.jsx (incorporating useToggle.js, useInput.js, useLocalStorage.js, useDocumentTitle, GitHubSearchWithHooks.jsx)`
* **Note Title:** Building Input, Toggle, and LocalStorage Utility Hooks
* **Learning Objective:** Construct and compose multiple custom hooks to manage forms, toggles, and persistent storage.
* **Summary:** Learners build a suite of utility hooks: useToggle for boolean switches, useInput for form inputs, useDocumentTitle for page titles, and useLocalStorage for persistent browser storage.
* **Step-by-Step Guidance:**
  1. Build useToggle returning state and toggle function.
  2. Build useInput returning value, onChange, and reset.
  3. Build useLocalStorage syncing state with browser storage.
  4. Combine these hooks into an interactive demo component.
* **Key Concepts & APIs to Remember:** Custom hook composition, localStorage.getItem/setItem, document title effects.
* **Minimal Code Example:**

```jsx
const [theme, setTheme] = useLocalStorage("theme", "light");
```

* **Common Pitfalls & Debugging Tips:** Failing to serialize objects with JSON.stringify when writing to localStorage causes [object Object] storage bugs.
* **Suggested Practice Exercises / Quick Assessment:** Build a useDebounce hook that delays updating a search value until typing pauses.
* **Estimated Completion Time & Difficulty:** 50 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 10 | https://react.dev/learn/reusing-logic-with-custom-hooks
