import { useMemo, useState } from 'react';

const users = ['Haitham', 'Ahmed', 'Sara', 'Omar', 'Noor'];

function SearchList() {
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
