# Challenge 02: Creating Independent Metric and List Components

* **Source Reference:** `src/challenges/02-components/UserStats.jsx & Skills.jsx ("UserStats" & "Skills")`
* **Note Title:** Creating Independent Metric and List Components
* **Learning Objective:** Build independent components to display structured metrics and lists within a parent page.
* **Summary:** Learners build two standalone components—one for developer statistics and one for a skill list—to practice modular styling and clean component structure.
* **Step-by-Step Guidance:**
  1. Create UserStats.jsx returning project count, experience, and location.
  2. Create Skills.jsx returning an unordered list of technologies.
  3. Export both components and verify they render within the main profile layout.
* **Key Concepts & APIs to Remember:** Multi-element wrapping in a single parent tag, standard HTML tag nesting in JSX.
* **Minimal Code Example:**

```jsx
function Skills() {
  return <ul><li>React</li></ul>;
}
```

* **Common Pitfalls & Debugging Tips:** Returning multiple sibling tags without an enclosing parent tag throws a syntax error.
* **Suggested Practice Exercises / Quick Assessment:** Add a social links component containing three links and integrate it into the layout.
* **Estimated Completion Time & Difficulty:** 20 minutes | Beginner
* **Recommended Prerequisites & Docs:** Lesson 02 | https://react.dev/learn/importing-and-exporting-components
