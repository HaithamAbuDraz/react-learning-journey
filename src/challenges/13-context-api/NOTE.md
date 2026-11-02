# Challenge 13: Building a Global Shopping Cart Context System

* **Source Reference:** `src/challenges/13-context-api/ContextApiChallenge.jsx (incorporating CartContext, CartProvider, CartItem, CartSummary, LanguageProvider, AuthProvider)`
* **Note Title:** Building a Global Shopping Cart Context System
* **Learning Objective:** Build an end-to-end shopping cart provider supporting add, remove, quantity adjustments, and totals.
* **Summary:** Learners build a production-style shopping cart system using Context API. The provider manages item addition, quantity updates, total cost calculations, and persists cart items across browser reloads.
* **Step-by-Step Guidance:**
  1. Initialize cart state with localStorage fallback.
  2. Implement addToCart (incrementing quantity if exists, appending if new).
  3. Implement removeFromCart and updateQuantity.
  4. Compute item counts and total costs in a summary component.
* **Key Concepts & APIs to Remember:** Global cart actions, computed totals with .reduce(), state synchronization with localStorage.
* **Minimal Code Example:**

```jsx
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

* **Common Pitfalls & Debugging Tips:** Re-creating provider value objects on every render can trigger unnecessary child renders; keep values stable or memoized when optimizing.
* **Suggested Practice Exercises / Quick Assessment:** Add a "Clear Cart" function that empties items and resets localStorage.
* **Estimated Completion Time & Difficulty:** 55 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 13 | https://react.dev/learn/scaling-up-with-reducer-and-context
