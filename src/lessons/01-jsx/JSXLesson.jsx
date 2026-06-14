function JSXLesson() {
  const name = 'Haitham';
  const profession = 'Software Engineer';
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h1>JSX Lesson</h1>

      <p>Hello, {name}!</p>

      <p>Profession: {profession}</p>

      <p>Current Year: {currentYear}</p>

      <p>2 + 3 = {2 + 3}</p>
    </div>
  );
}

export default JSXLesson;
