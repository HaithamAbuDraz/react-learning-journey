# Challenge 07: Building a Feature-Rich Todo Application

* **Source Reference:** `src/challenges/07-lists-and-keys/ListsAndKeysChallenge.jsx (incorporating TodoList.jsx, SkillsList.jsx, StudentCard.jsx, ConditionalList.jsx)`
* **Note Title:** Building a Feature-Rich Todo Application
* **Learning Objective:** Manage array state to add, remove, and toggle items immutably.
* **Summary:** Learners build a full-featured todo list. Key capabilities include appending new items with Date.now() IDs, toggling completion status with .map(), and deleting completed items with .filter().
* **Step-by-Step Guidance:**
  1. Store todos in state with id, text, and completed fields.
  2. Prepend new todos using array spreading [newTodo, ...todos].
  3. Toggle items by mapping over todos and updating matching IDs.
  4. Filter out completed todos using todos.filter(t => !t.completed).
* **Key Concepts & APIs to Remember:** Immutable array updates, array spread [...items], .filter(), dynamic CSS line-through styling.
* **Minimal Code Example:**

```jsx
setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
```

* **Common Pitfalls & Debugging Tips:** Using .push() or .splice() mutates array state directly, preventing React from recognizing state changes.
* **Suggested Practice Exercises / Quick Assessment:** Add filter buttons to view "All", "Active", or "Completed" items.
* **Estimated Completion Time & Difficulty:** 45 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 07 | https://react.dev/learn/updating-arrays-in-state
