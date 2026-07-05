import { useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';

function CartApp() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  });

  const products = [
    { id: 1, name: 'Laptop', price: 999.99, emoji: '💻' },
    { id: 2, name: 'Keyboard', price: 49.99, emoji: '⌨️' },
    { id: 3, name: 'Mouse', price: 29.99, emoji: '🖱️' },
    { id: 4, name: 'Monitor', price: 299.99, emoji: '🖥️' },
    { id: 5, name: 'Headphones', price: 79.99, emoji: '🎧' },
  ];

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h3>Products</h3>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <div>
                  <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>
                    {product.emoji}
                  </span>
                  <strong>{product.name}</strong>
                  <p
                    style={{ margin: 0, color: '#61dafb', fontWeight: 'bold' }}
                  >
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() =>
                    dispatch({ type: 'ADD_ITEM', payload: product })
                  }
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
            ))}
          </div>
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <div
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>Cart Summary</h3>

            {state.items.length === 0 ? (
              <p style={{ color: '#666', fontStyle: 'italic' }}>
                Your cart is empty
              </p>
            ) : (
              <>
                <div style={{ marginBottom: '15px' }}>
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 0',
                        borderBottom: '1px solid #eee',
                      }}
                    >
                      <div>
                        <span>{item.emoji}</span>
                        <span style={{ marginLeft: '8px' }}>{item.name}</span>
                        <span style={{ marginLeft: '8px', color: '#666' }}>
                          × {item.quantity}
                        </span>
                      </div>
                      <div>
                        <span style={{ marginRight: '10px' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                          }
                          style={{
                            padding: '2px 8px',
                            backgroundColor: '#ffa94d',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginRight: '4px',
                          }}
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            dispatch({ type: 'ADD_ITEM', payload: item })
                          }
                          style={{
                            padding: '2px 8px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginRight: '4px',
                          }}
                        >
                          +
                        </button>
                        <button
                          onClick={() =>
                            dispatch({ type: 'DELETE_ITEM', payload: item.id })
                          }
                          style={{
                            padding: '2px 8px',
                            backgroundColor: '#ff6b6b',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                          }}
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    padding: '15px 0',
                    borderTop: '2px solid #ddd',
                    marginTop: '10px',
                  }}
                >
                  <h4>Total: ${state.total.toFixed(2)}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#666' }}>
                    {state.items.reduce((acc, item) => acc + item.quantity, 0)}{' '}
                    items
                  </p>
                </div>

                <button
                  onClick={() => dispatch({ type: 'CLEAR_CART' })}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Clear Cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartApp;
