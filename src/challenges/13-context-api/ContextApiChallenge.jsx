import CartProvider from './providers/CartProvider';
import { useContext } from 'react';
import CartContext from './context/CartContext';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}

function CartItemsList() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>No items in cart</p>;
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function ContextApiChallenge() {
  const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Keyboard', price: 49.99 },
    { id: 3, name: 'Mouse', price: 29.99 },
    { id: 4, name: 'Monitor', price: 299.99 },
  ];

  return (
    <div>
      <h1>Context API Challenges</h1>
      <section>
        <h2>Challenge 3: Shopping Cart Context</h2>
        <CartProvider>
          <div>
            <div>
              <h3>Products</h3>
              {products.map((product) => (
                <div key={product.id}>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>{product.name}</strong>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div>
              <CartSummary />
              <hr />
              <CartItemsList />
            </div>
          </div>
        </CartProvider>
      </section>
    </div>
  );
}

export default ContextApiChallenge;
