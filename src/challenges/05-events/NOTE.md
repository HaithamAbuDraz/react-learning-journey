# Challenge 05: Implementing Form Submission and Mouse Event Handlers

* **Source Reference:** `src/challenges/05-events/EventsChallenge.jsx (incorporating UserGreeting.jsx, ColorSwitcher.jsx, HoverBox.jsx, UserForm.jsx)`
* **Note Title:** Implementing Form Submission and Mouse Event Handlers
* **Learning Objective:** Prevent default form reloads and manage mouse hover and input state changes.
* **Summary:** Learners build an interactive greeting form that prevents page reloads on submit, validates text input, and responds dynamically to hover and color switch events.
* **Step-by-Step Guidance:**
  1. Create a form with a text input and submit button.
  2. Attach onSubmit={handleSubmit} to the form.
  3. Call event.preventDefault() to stop browser page reloads.
  4. Display personalized greetings or fallback to "Guest".
* **Key Concepts & APIs to Remember:** event.preventDefault(), controlled input binding, mouse enter/leave events.
* **Minimal Code Example:**

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Saved!");
};
```

* **Common Pitfalls & Debugging Tips:** Forgetting event.preventDefault() causes the browser to refresh the page and erase React state.
* **Suggested Practice Exercises / Quick Assessment:** Add mouse enter and leave events that change the card background color when hovered.
* **Estimated Completion Time & Difficulty:** 30 minutes | Beginner
* **Recommended Prerequisites & Docs:** Lesson 05 | https://react.dev/learn/responding-to-events#preventing-default-behavior
