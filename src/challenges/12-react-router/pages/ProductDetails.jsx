import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  const products = {
    1: { name: 'Laptop', price: '$999', category: 'Electronics' },
    2: { name: 'Keyboard', price: '$49', category: 'Accessories' },
    3: { name: 'Mouse', price: '$29', category: 'Accessories' },
    4: { name: 'Monitor', price: '$299', category: 'Electronics' },
  };

  const product = products[id];

  return (
    <div>
      <h1>Product Details</h1>

      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> {product.price}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Product ID:</strong> {id}
          </p>

          <Link to='/products'>
            <button>Back to Products</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Product with ID {id} not found.</p>
          <Link to='/products'>Back to Products</Link>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
