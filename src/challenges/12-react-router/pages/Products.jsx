import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999' },
    { id: 2, name: 'Keyboard', price: '$49' },
    { id: 3, name: 'Mouse', price: '$29' },
    { id: 4, name: 'Monitor', price: '$299' },
  ];

  return (
    <div>
      <h1>Products</h1>
      <p>Browse our product catalog.</p>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <Link to={`/products/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
