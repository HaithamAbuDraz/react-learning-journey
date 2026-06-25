import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <div>
        <h4>{item.name}</h4>
        <p>
          ${item.price} × {item.quantity} = $
          {(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
