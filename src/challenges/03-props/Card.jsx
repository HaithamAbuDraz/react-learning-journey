function Card({ children }) {
  return (
    <div
      style={{
        border: '2px solid #61dafb',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px 0',
        backgroundColor: '#f9f9f9',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
