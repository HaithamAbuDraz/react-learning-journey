# Challenge 03: Building Reusable Cards and Layout Wrappers

* **Source Reference:** `src/challenges/03-props/ProfileCard.jsx, SkillsCard.jsx, & Card.jsx`
* **Note Title:** Building Reusable Cards and Layout Wrappers
* **Learning Objective:** Build flexible card components accepting varied data types and nestable children.
* **Summary:** Learners implement customized profile cards, badge-style skills cards with proficiency levels, and a generic styled container component using the children prop pattern.
* **Step-by-Step Guidance:**
  1. Build ProfileCard accepting name, role, location, and years of experience.
  2. Build SkillsCard accepting skill name and proficiency level.
  3. Build Card accepting children and applying card borders and padding.
  4. Render multiple instances with different content.
* **Key Concepts & APIs to Remember:** Container component pattern, inline styling objects style={{ border: "2px solid" }}, props destructuring.
* **Minimal Code Example:**

```jsx
<Card>
  <SkillsCard skill="React" level="Intermediate" />
</Card>
```

* **Common Pitfalls & Debugging Tips:** Props are read-only; never attempt to modify a prop directly inside a child component.
* **Suggested Practice Exercises / Quick Assessment:** Add a custom bgColor prop to Card with a default fallback color.
* **Estimated Completion Time & Difficulty:** 25 minutes | Beginner
* **Recommended Prerequisites & Docs:** Lesson 03 | https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
