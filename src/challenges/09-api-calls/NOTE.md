# Challenge 09: Building Search-Driven Remote API Applications

* **Source Reference:** `src/challenges/09-api-calls/ApiCallsChallenge.jsx (incorporating WeatherApp.jsx, GitHubSearch.jsx, PostsList.jsx, TodosList.jsx)`
* **Note Title:** Building Search-Driven Remote API Applications
* **Learning Objective:** Execute parameterized API requests triggered by user form submissions.
* **Summary:** Learners build search interfaces that query live remote endpoints (such as weather or GitHub APIs). The app validates user input, presents spinners during fetches, and formats API JSON responses.
* **Step-by-Step Guidance:**
  1. Capture query input state from a search bar.
  2. Trigger fetch requests when users submit the search form.
  3. Handle 404 response errors gracefully with user-friendly warnings.
  4. Display profile avatars, follower counts, and repositories upon success.
* **Key Concepts & APIs to Remember:** Parameterized URLs, conditional rendering of error messages, HTTP status verification.
* **Minimal Code Example:**

```jsx
const res = await fetch("https://api.github.com/users/" + query);
if (!res.ok) throw new Error("Not found");
```

* **Common Pitfalls & Debugging Tips:** Directly rendering raw nested JSON objects inside JSX causes React crashes; extract specific primitive properties before rendering.
* **Suggested Practice Exercises / Quick Assessment:** Add recent search history buttons that re-execute past queries when clicked.
* **Estimated Completion Time & Difficulty:** 50 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 09 | https://react.dev/learn/synchronizing-with-effects
