# Lesson 05: Handling User Interactions and Synthetic Events

* **Source Reference:** `src/lessons/05-events/EventsLesson.jsx (incorporating ClickCounter, InputTracker, KeyTracker)`
* **Note Title:** Handling User Interactions and Synthetic Events
* **Learning Objective:** Capture and respond to button clicks, text input changes, and keyboard presses in React.
* **Summary:** React wraps browser events in synthetic events to ensure consistent cross-browser behavior. Handlers are assigned using camelCase props such as onClick, onChange, and onKeyDown.
* **Step-by-Step Guidance:**
  1. Define an event handler function.
  2. Pass the handler reference to the event prop (e.g. onClick={handleClick}).
  3. Access input text using event.target.value.
  4. Detect pressed keys using event.key.
* **Key Concepts & APIs to Remember:** onClick, onChange, onKeyDown, event.target.value, event.key.
* **Minimal Code Example:**

```jsx
<input onChange={(e) => setInputText(e.target.value)} />
```

* **Common Pitfalls & Debugging Tips:** Writing onClick={handleClick()} invokes the function immediately on render instead of when clicked; pass the function reference without parentheses.
* **Suggested Practice Exercises / Quick Assessment:** Display an alert whenever the user presses the "Enter" key inside an input field.
* **Estimated Completion Time & Difficulty:** 30 minutes | Beginner
* **Recommended Prerequisites & Docs:** Basic DOM events | https://react.dev/learn/responding-to-events
