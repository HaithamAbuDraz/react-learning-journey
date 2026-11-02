# Lesson 02: Building Modular UIs with Component Composition

* **Source Reference:** `src/lessons/02-components/ComponentsLesson.jsx ("Components Lesson")`
* **Note Title:** Building Modular UIs with Component Composition
* **Learning Objective:** Decompose a page layout into independent, reusable functional components.
* **Summary:** React interfaces are assembled like building blocks. Splitting page sections into dedicated components makes code clean, maintainable, and easy to reuse.
* **Step-by-Step Guidance:**
  1. Create separate component files for Header, ProfileCard, and Footer.
  2. Return JSX elements from each function.
  3. Export each component with export default.
  4. Import and assemble them inside a parent layout component.
* **Key Concepts & APIs to Remember:** Functional components, export default, component import, self-closing tags <Header />.
* **Minimal Code Example:**

```jsx
function App() {
  return <div><Header /><Footer /></div>;
}
```

* **Common Pitfalls & Debugging Tips:** React component names must always start with an uppercase letter or React treats them as standard HTML tags.
* **Suggested Practice Exercises / Quick Assessment:** Create a Sidebar component and insert it between Header and Footer.
* **Estimated Completion Time & Difficulty:** 25 minutes | Beginner
* **Recommended Prerequisites & Docs:** JavaScript functions | https://react.dev/learn/your-first-component
