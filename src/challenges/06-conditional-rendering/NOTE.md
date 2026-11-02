# Challenge 06: Building a Complete Login and Role System

* **Source Reference:** `src/challenges/06-conditional-rendering/ConditionalRenderingChallenge.jsx (incorporating LoginSystem.jsx, AgeChecker.jsx, NotificationBadge.jsx, UserRole.jsx)`
* **Note Title:** Building a Complete Login and Role System
* **Learning Objective:** Implement dynamic screen switching between login forms and authenticated user dashboards.
* **Summary:** Learners construct a full authentication view. When logged out, users see input fields and validation warnings; when logged in, the screen replaces the form with a personalized dashboard and logout button.
* **Step-by-Step Guidance:**
  1. Maintain isLoggedIn, username, and password state.
  2. Validate that both fields are filled before toggling login.
  3. Render the dashboard when logged in, or the login form when logged out.
  4. Implement a logout handler that resets credentials.
* **Key Concepts & APIs to Remember:** Conditional view swapping, input validation feedback, conditional button styles.
* **Minimal Code Example:**

```jsx
return isLoggedIn ? <Dashboard user={username} /> : <LoginForm />;
```

* **Common Pitfalls & Debugging Tips:** Forgetting to clear sensitive state (like passwords) upon logout leaves leftover values in memory.
* **Suggested Practice Exercises / Quick Assessment:** Add an admin role flag that conditionally shows an extra admin settings panel.
* **Estimated Completion Time & Difficulty:** 40 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 06 | https://react.dev/learn/conditional-rendering
