# Lesson 01: Embedding Dynamic Data in JSX

* **Source Reference:** `src/lessons/01-jsx/JSXLesson.jsx ("JSX Lesson")`
* **Note Title:** Embedding Dynamic Data in JSX
* **Learning Objective:** Embed dynamic JavaScript expressions, variables, and calculations into JSX markup.
* **Summary:** JSX allows writing HTML-like markup inside JavaScript files. By wrapping expressions in curly braces, React automatically evaluates and renders dynamic values into the user interface.
* **Step-by-Step Guidance:**
  1. Create a functional component returning JSX.
  2. Declare variables for dynamic text above the return statement.
  3. Use curly braces {} to output variables inside tags.
  4. Run inline operations like math or date formatting directly within braces.
* **Key Concepts & APIs to Remember:** JSX syntax, expression interpolation {}, Date().getFullYear().
* **Minimal Code Example:**

```jsx
const name = "Haitham";
return <h1>Hello, {name}!</h1>;
```

* **Common Pitfalls & Debugging Tips:** Statements like if or for cannot go inside curly braces; use only expressions that evaluate to a value.
* **Suggested Practice Exercises / Quick Assessment:** Render your birth year and calculate your current age inline using JSX.
* **Estimated Completion Time & Difficulty:** 15 minutes | Beginner
* **Recommended Prerequisites & Docs:** Basic JavaScript variables | https://react.dev/learn/writing-markup-with-jsx
