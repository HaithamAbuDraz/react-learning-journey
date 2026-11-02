# Lesson 06: Showing and Hiding UI Elements Conditionally

* **Source Reference:** `src/lessons/06-conditional-rendering/ConditionalRenderingLesson.jsx (incorporating LoadingExample, LoginStatus, UserGreeting)`
* **Note Title:** Showing and Hiding UI Elements Conditionally
* **Learning Objective:** Render different JSX elements based on component state using ternaries, logical operators, and early returns.
* **Summary:** React components can output different markup depending on current state. Common patterns include ternary operators for binary choices and the logical AND (&&) operator for toggleable elements.
* **Step-by-Step Guidance:**
  1. Identify conditions requiring different screens (e.g. isLoading).
  2. Use if (isLoading) return <Loading /> for early returns.
  3. Use ternaries {isLoggedIn ? <User /> : <Login />} for two-branch renders.
  4. Use {show && <Modal />} to show or hide single elements.
* **Key Concepts & APIs to Remember:** Early returns, ternary operator condition ? a : b, logical AND condition && element.
* **Minimal Code Example:**

```jsx
{loading ? <p>Loading...</p> : <h1>Welcome!</h1>}
```

* **Common Pitfalls & Debugging Tips:** Using numbers like 0 && <Item /> renders 0 directly on screen; always ensure conditions evaluate to strict booleans.
* **Suggested Practice Exercises / Quick Assessment:** Create a notification alert that only renders if an unread count is greater than zero.
* **Estimated Completion Time & Difficulty:** 30 minutes | Beginner
* **Recommended Prerequisites & Docs:** JavaScript boolean logic | https://react.dev/learn/conditional-rendering
