# Challenge 12: Building E-Commerce and Service Catalogs with Detail Routes

* **Source Reference:** `src/challenges/12-react-router/ReactRouterChallenge.jsx (incorporating Products.jsx, ProductDetails.jsx, Services.jsx, ServiceDetail.jsx)`
* **Note Title:** Building E-Commerce and Service Catalogs with Detail Routes
* **Learning Objective:** Connect list views to dynamic detail pages and handle missing record 404 fallbacks.
* **Summary:** Learners build interconnected product and service catalogs. Clicking catalog items navigates to detail pages based on dynamic IDs, displaying full item specs or a "Not Found" message if missing.
* **Step-by-Step Guidance:**
  1. Define parent routes for /products and /services.
  2. Configure detail routes with parameters: /products/:id and /services/:id.
  3. Extract the id param and look up the matching item from a data array.
  4. Render a 404 fallback message if no item matches.
* **Key Concepts & APIs to Remember:** Dynamic route segments :id, useParams(), conditional 404 handling, Link to={...}.
* **Minimal Code Example:**

```jsx
<Route path="/products/:id" element={<ProductDetails />} />
```

* **Common Pitfalls & Debugging Tips:** useParams() values are always strings; comparing them directly to numeric IDs with === fails unless parsed with Number(id).
* **Suggested Practice Exercises / Quick Assessment:** Add a "Back to Products" navigation button using the useNavigate() hook.
* **Estimated Completion Time & Difficulty:** 45 minutes | Intermediate
* **Recommended Prerequisites & Docs:** Lesson 12 | https://reactrouter.com/
