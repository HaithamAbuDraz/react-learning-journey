import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartSummary() {
  const { cart, getTotalItems, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h3>Cart Summary</h3>
      <p>
        <strong>Items:</strong> {getTotalItems()}
      </p>
      <p>
        <strong>Total:</strong> ${getTotalPrice().toFixed(2)}
      </p>

      {cart.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
}

export default CartSummary;
