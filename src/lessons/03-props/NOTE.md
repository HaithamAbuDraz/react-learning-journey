# Lesson 03: Customizing Components with Props and Children

* **Source Reference:** `src/lessons/03-props/PropsLesson.jsx ("Props Lesson")`
* **Note Title:** Customizing Components with Props and Children
* **Learning Objective:** Pass custom data and nested JSX elements into components using props and children.
* **Summary:** Props allow parent components to customize child components by passing data down like HTML attributes. The special children prop lets a component wrap and style arbitrary nested content.
* **Step-by-Step Guidance:**
  1. Pass attributes like name="Alex" into child component tags.
  2. Destructure props in the child function arguments.
  3. Render prop values inside the child markup.
  4. Use {children} inside a card component to render enclosed elements.
* **Key Concepts & APIs to Remember:** Props destructuring { name, role }, children prop, passing numbers with {2}.
* **Minimal Code Example:**

```jsx
function Card({ children }) {
  return <div className="box">{children}</div>;
}
```

* **Common Pitfalls & Debugging Tips:** Passing numbers or booleans as strings (e.g. experience="2") prevents numeric calculations. Always pass non-string values inside {}.
* **Suggested Practice Exercises / Quick Assessment:** Add an isAvailable boolean prop to ProfileCard to show work availability status.
* **Estimated Completion Time & Difficulty:** 30 minutes | Beginner
* **Recommended Prerequisites & Docs:** Object destructuring | https://react.dev/learn/passing-props-to-a-component
