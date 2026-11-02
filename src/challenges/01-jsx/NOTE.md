# Challenge 01: Practicing JSX Interpolation and Arithmetic

* **Source Reference:** `src/challenges/01-jsx/Challenge1.jsx & Challenge2.jsx ("Challenge 1" & "Challenge 2")`
* **Note Title:** Practicing JSX Interpolation and Arithmetic
* **Learning Objective:** Construct personal profile strings and perform future date arithmetic using JSX expressions.
* **Summary:** This challenge reinforces inserting dynamic personal data and computed numerical values directly into markup. Learners practice combining strings and displaying calculated numbers.
* **Step-by-Step Guidance:**
  1. Declare first name, last name, university, and major as variables.
  2. Output full names with spaces inside paragraph tags.
  3. Define an age variable and add numbers inline to compute a future year's age.
* **Key Concepts & APIs to Remember:** String concatenation inside JSX, inline numerical addition {age + 4}.
* **Minimal Code Example:**

```jsx
<p>Age in 2030: {age + 4}</p>
```

* **Common Pitfalls & Debugging Tips:** Forgetting spaces between multiple interpolated variables results in merged words.
* **Suggested Practice Exercises / Quick Assessment:** Calculate how many days remain until the end of the current year directly inside JSX.
* **Estimated Completion Time & Difficulty:** 15 minutes | Beginner
* **Recommended Prerequisites & Docs:** Lesson 01 | https://react.dev/learn/javascript-in-jsx-with-curly-braces
