# Lesson 07: Rendering Dynamic Collections with Array.map()

* **Source Reference:** `src/lessons/07-lists-and-keys/ListsAndKeysLesson.jsx (incorporating ProductCard.jsx, UserCard.jsx)`
* **Note Title:** Rendering Dynamic Collections with Array.map()
* **Learning Objective:** Transform JavaScript data arrays into lists of JSX components using unique keys.
* **Summary:** Dynamic collections are displayed by mapping over data arrays and returning JSX elements. React requires each item to have a unique key prop to track items accurately across re-renders.
* **Step-by-Step Guidance:**
  1. Store collection items as an array of objects with unique IDs.
  2. Call .map() inside JSX curly braces.
  3. Return a component or HTML element for each item.
  4. Assign key={item.id} to the outermost element in the loop.
* **Key Concepts & APIs to Remember:** array.map(), key prop, stable unique identifiers.
* **Minimal Code Example:**

```jsx
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

* **Common Pitfalls & Debugging Tips:** Using array indexes as keys causes bugs when items are reordered, filtered, or deleted; always use stable, unique data IDs.
* **Suggested Practice Exercises / Quick Assessment:** Render a list of products and display prices formatted in local currency.
* **Estimated Completion Time & Difficulty:** 30 minutes | Beginner
* **Recommended Prerequisites & Docs:** JavaScript array methods | https://react.dev/learn/rendering-lists
