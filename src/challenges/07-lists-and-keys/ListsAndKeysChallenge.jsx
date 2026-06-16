import StudentCard from './components/StudentCard';

function ListsAndKeysChallenge() {
  const students = [
    {
      id: 1,
      name: 'Haitham',
      grade: 97,
    },
    {
      id: 2,
      name: 'Ali',
      grade: 88,
    },
    {
      id: 3,
      name: 'Omar',
      grade: 76,
    },
    {
      id: 4,
      name: 'Layla',
      grade: 92,
    },
  ];

  return (
    <div>
      <h1>Lists And Keys Challenge</h1>

      <h2>Students</h2>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          grade={student.grade}
        />
      ))}
    </div>
  );
}

export default ListsAndKeysChallenge;
