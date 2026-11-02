# Lesson 09: Fetching Remote Server Data with Fetch and Async/Await

* **Source Reference:** `src/lessons/09-api-calls/ApiCallsLesson.jsx (incorporating GitHubProfile.jsx, UserFetcher.jsx, UsersList.jsx)`
* **Note Title:** Fetching Remote Server Data with Fetch and Async/Await
* **Learning Objective:** Fetch data from REST APIs inside useEffect and handle loading, error, and success states.
* **Summary:** Real-world apps fetch data over the network. Managing three explicit states—loading, error, and data—guarantees a smooth user experience while asynchronous requests resolve.
* **Step-by-Step Guidance:**
  1. Set up state for data, loading (true), and error (null).
  2. Define an async function inside useEffect.
  3. Fetch data, check response.ok, and parse JSON.
  4. Update data state in try, catch errors in catch, and set loading to false in finally.
* **Key Concepts & APIs to Remember:** fetch(), async/await, response.ok, try-catch-finally, tripartite network state.
* **Minimal Code Example:**

```jsx
useEffect(() => {
  fetch(url).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
}, []);
```

* **Common Pitfalls & Debugging Tips:** Marking the useEffect callback function itself as async is invalid because effects must return either nothing or a cleanup function.
* **Suggested Practice Exercises / Quick Assessment:** Fetch a public list of posts and display an error banner if the network request fails.
* **Estimated Completion Time & Difficulty:** 45 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Promises and async/await | https://react.dev/reference/react/useEffect#fetching-data-with-effects
