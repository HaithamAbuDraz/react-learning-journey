import React from 'react';

function MemoizedButton({ title, onClick }) {
  console.log(`${title} rendered`);

  return <button onClick={onClick}>{title}</button>;
}

export default React.memo(MemoizedButton);
