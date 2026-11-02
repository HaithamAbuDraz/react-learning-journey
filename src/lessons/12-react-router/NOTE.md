# Lesson 12: Setting Up Multi-Page Client Navigation with React Router

* **Source Reference:** `src/lessons/12-react-router/ReactRouterLesson.jsx (incorporating Navbar, Home, About, Contact, Users, UserProfile)`
* **Note Title:** Setting Up Multi-Page Client Navigation with React Router
* **Learning Objective:** Configure client-side navigation and extract dynamic route parameters using React Router.
* **Summary:** Single-page applications navigate between screens without full page refreshes. React Router matches URL paths to components and extracts parameters from dynamic segments like :id.
* **Step-by-Step Guidance:**
  1. Wrap the application inside <BrowserRouter>.
  2. Define route targets using <Routes> and <Route path="..." element={<Comp />} />.
  3. Add <NavLink> links for navigation with active styling.
  4. Read URL variables inside child pages with useParams().
* **Key Concepts & APIs to Remember:** BrowserRouter, Routes, Route, NavLink, useParams().
* **Minimal Code Example:**

```jsx
const { id } = useParams();
return <h2>Profile for User {id}</h2>;
```

* **Common Pitfalls & Debugging Tips:** Using regular <a href> tags triggers full page reloads and wipes React state; always use <Link> or <NavLink>.
* **Suggested Practice Exercises / Quick Assessment:** Add an active CSS class or highlight color to the currently active navigation link.
* **Estimated Completion Time & Difficulty:** 40 minutes | Intermediate
* **Recommended Prerequisites & Docs:** URL anatomy | https://reactrouter.com/
