# Lesson 11: Managing Multi-Input Form State and Validation

* **Source Reference:** `src/lessons/11-forms/FormsLesson.jsx (incorporating BasicForm.jsx, LoginForm.jsx, RegistrationForm.jsx)`
* **Note Title:** Managing Multi-Input Form State and Validation
* **Learning Objective:** Track multiple form inputs within a single state object and validate user submissions.
* **Summary:** Controlled components tie input values directly to React state. Storing all input fields in a single object with dynamic keys eliminates repetitive handlers and simplifies validation.
* **Step-by-Step Guidance:**
  1. Initialize state with an object containing all field names.
  2. Attach name attributes to all input tags.
  3. Write one handleChange handler using computed property names [e.target.name]: e.target.value.
  4. Validate fields on submit before processing.
* **Key Concepts & APIs to Remember:** Controlled inputs, computed property names [name]: value, object spread updates { ...prev }.
* **Minimal Code Example:**

```jsx
const handleChange = e => setForm({
  ...form,
  [e.target.name]: e.target.value
});
```

* **Common Pitfalls & Debugging Tips:** Missing the name attribute on an input breaks computed property updates, setting the key to undefined.
* **Suggested Practice Exercises / Quick Assessment:** Add email format validation using a regular expression before allowing submission.
* **Estimated Completion Time & Difficulty:** 35 minutes | Intermediate
* **Recommended Prerequisites & Docs:** ES6 object syntax | https://react.dev/reference/react-dom/components/input
