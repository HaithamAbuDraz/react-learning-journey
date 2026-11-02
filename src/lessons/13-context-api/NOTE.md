# Lesson 13: Eliminating Prop Drilling with Context API

* **Source Reference:** `src/lessons/13-context-api/ContextApiLesson.jsx (incorporating ThemeContext, UserContext, ThemeProvider, UserProvider, ThemeSwitcher)`
* **Note Title:** Eliminating Prop Drilling with Context API
* **Learning Objective:** Share global data and functions across deeply nested components without manual prop passing.
* **Summary:** Prop drilling requires passing props through intermediate components that don't need them. Context provides a central data store where any descendant component can access values directly.
* **Step-by-Step Guidance:**
  1. Create context using createContext().
  2. Build a provider component wrapping {children} with <Context.Provider value={...}>.
  3. Supply state and updater functions in the value prop.
  4. Consume context in nested components using useContext().
* **Key Concepts & APIs to Remember:** createContext(), useContext(), Context Provider, global state sharing.
* **Minimal Code Example:**

```jsx
const ThemeContext = createContext();
const { theme } = useContext(ThemeContext);
```

* **Common Pitfalls & Debugging Tips:** Calling useContext outside of a component wrapped by the matching Provider returns the context's default value or undefined.
* **Suggested Practice Exercises / Quick Assessment:** Create a user authentication context providing the current username to a navigation header.
* **Estimated Completion Time & Difficulty:** 45 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 03, Lesson 04 | https://react.dev/learn/passing-data-deeply-with-context
