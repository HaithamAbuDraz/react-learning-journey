function StudentCard({ name, grade }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Grade: {grade}%</p>
      <p>
        Status:
        {grade >= 90
          ? '✅ Excellent'
          : grade >= 70
            ? '👍 Good'
            : '📚 Needs Improvement'}
      </p>
    </div>
  );
}

export default StudentCard;
