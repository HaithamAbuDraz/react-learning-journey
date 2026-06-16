import UserCard from './components/UserCard';

function ListsAndKeysLesson() {
  const users = [
    {
      id: 1,
      name: 'Haitham',
      role: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Ahmed',
      role: 'Frontend Developer',
    },
    {
      id: 3,
      name: 'Sara',
      role: 'UI/UX Designer',
    },
  ];

  return (
    <div>
      <h1>Lists and Keys Lesson</h1>

      {users.map((user) => (
        <UserCard key={user.id} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

export default ListsAndKeysLesson;
