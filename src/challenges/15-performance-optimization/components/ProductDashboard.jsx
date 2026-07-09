import { useState, useMemo, useCallback } from 'react';
import React from 'react';

// Memoized Product Card component
const ProductCard = React.memo(({ product, onAddToCart }) => {
  console.log(`Rendering ProductCard ${product.id}`);
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s',
      }}
    >
      <div style={{ fontSize: '3rem' }}>{product.emoji}</div>
      <h3>{product.name}</h3>
      <p style={{ color: '#666' }}>{product.category}</p>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#61dafb' }}>
        ${product.price.toFixed(2)}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
});

function ProductDashboard() {
  const [products] = useState([
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 999.99,
      emoji: '💻',
    },
    {
      id: 2,
      name: 'Smartphone',
      category: 'Electronics',
      price: 699.99,
      emoji: '📱',
    },
    {
      id: 3,
      name: 'Headphones',
      category: 'Accessories',
      price: 79.99,
      emoji: '🎧',
    },
    {
      id: 4,
      name: 'Keyboard',
      category: 'Accessories',
      price: 49.99,
      emoji: '⌨️',
    },
    {
      id: 5,
      name: 'Monitor',
      category: 'Electronics',
      price: 299.99,
      emoji: '🖥️',
    },
    {
      id: 6,
      name: 'Mouse',
      category: 'Accessories',
      price: 29.99,
      emoji: '🖱️',
    },
    {
      id: 7,
      name: 'Tablet',
      category: 'Electronics',
      price: 399.99,
      emoji: '📟',
    },
    {
      id: 8,
      name: 'Charger',
      category: 'Accessories',
      price: 19.99,
      emoji: '🔌',
    },
  ]);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [cart, setCart] = useState([]);

  // Memoize filtering and sorting
  const processedProducts = useMemo(() => {
    console.log('Processing products...');
    // Filter
    let result = products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || p.category === category;
      return matchesSearch && matchesCategory;
    });

    // Sort
    result.sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      return b.price - a.price;
    });

    return result;
  }, [products, search, category, sortOrder]);

  // Stable callback for adding to cart
  const handleAddToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  // Memoized cart summary
  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return { totalItems, totalPrice };
  }, [cart]);

  return (
    <div>
      <h2>🏪 Product Dashboard</h2>

      {/* Filters */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          padding: '15px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <input
          type='text'
          placeholder='Search products...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            flex: '1',
            minWidth: '150px',
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        >
          <option value='All'>All Categories</option>
          <option value='Electronics'>Electronics</option>
          <option value='Accessories'>Accessories</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        >
          <option value='asc'>Price: Low to High</option>
          <option value='desc'>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {processedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Cart Summary */}
      <div
        style={{
          padding: '15px',
          backgroundColor: '#e8f4f8',
          borderRadius: '8px',
          border: '1px solid #61dafb',
        }}
      >
        <h3>🛒 Cart</h3>
        <p>
          Items: <strong>{cartSummary.totalItems}</strong> | Total:{' '}
          <strong>${cartSummary.totalPrice.toFixed(2)}</strong>
        </p>
        {cart.length > 0 && (
          <button
            onClick={() => setCart([])}
            style={{
              padding: '6px 12px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear Cart
          </button>
        )}
        {cart.length === 0 && (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDashboard;
