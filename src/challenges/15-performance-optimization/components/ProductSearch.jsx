import { useState, useMemo } from 'react';

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Smartphone', category: 'Electronics' },
  { id: 3, name: 'Headphones', category: 'Accessories' },
  { id: 4, name: 'Keyboard', category: 'Accessories' },
  { id: 5, name: 'Monitor', category: 'Electronics' },
  { id: 6, name: 'Mouse', category: 'Accessories' },
  { id: 7, name: 'Tablet', category: 'Electronics' },
  { id: 8, name: 'Charger', category: 'Accessories' },
];

function ProductSearch() {
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    const lowerSearch = search.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerSearch) ||
        product.category.toLowerCase().includes(lowerSearch),
    );
  }, [search]);

  return (
    <div style={{ maxWidth: '500px' }}>
      <h2>🔍 Product Search</h2>

      <input
        type='text'
        placeholder='Search products...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          boxSizing: 'border-box',
        }}
      />

      <div style={{ marginTop: '15px' }}>
        <p>
          Found <strong>{filteredProducts.length}</strong> products
          {search && ` matching "${search}"`}
        </p>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{
                padding: '8px 12px',
                marginBottom: '5px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #eee',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{product.name}</span>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {product.category}
              </span>
            </li>
          ))}
        </ul>

        {filteredProducts.length === 0 && (
          <p style={{ color: '#999', fontStyle: 'italic' }}>
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
