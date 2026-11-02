# Challenge 11: Building Validated Forms with Live Character and Strength Meters

* **Source Reference:** `src/challenges/11-forms/FormsChallenge.jsx (incorporating ContactForm.jsx, CharacterCounter.jsx, PasswordStrength.jsx, SelectRole.jsx)`
* **Note Title:** Building Validated Forms with Live Character and Strength Meters
* **Learning Objective:** Implement dynamic live feedback for form inputs including character limits and password strength.
* **Summary:** Learners build an advanced contact and registration form featuring live character counters, real-time password strength indicators, role dropdown selections, and comprehensive error summaries.
* **Step-by-Step Guidance:**
  1. Implement text inputs with character limit calculations.
  2. Calculate password strength (Weak, Medium, Strong) based on length and characters.
  3. Bind a <select> dropdown to role state.
  4. Render error alerts when required fields are missing.
* **Key Concepts & APIs to Remember:** <select> and <textarea> controlled inputs, live length tracking, dynamic meter coloring.
* **Minimal Code Example:**

```jsx
<p>{max - text.length} characters left</p>
```

* **Common Pitfalls & Debugging Tips:** Using defaultValue instead of value creates uncontrolled inputs that get out of sync with component state.
* **Suggested Practice Exercises / Quick Assessment:** Add a "Confirm Password" field and show a live warning if passwords do not match.
* **Estimated Completion Time & Difficulty:** 45 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 11 | https://react.dev/reference/react-dom/components/select
