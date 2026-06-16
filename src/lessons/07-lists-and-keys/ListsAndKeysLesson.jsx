import ProductCard from './components/ProductCard';

function ListsAndKeysLesson() {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1000,
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 50,
    },
    {
      id: 3,
      name: 'Mouse',
      price: 25,
    },
  ];

  return (
    <div>
      <h1>Lists and Keys Lesson</h1>

      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ListsAndKeysLesson;
