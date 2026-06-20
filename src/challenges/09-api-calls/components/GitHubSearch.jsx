import { useEffect, useState } from 'react';

function GitHubSearch() {
  const [username, setUsername] = useState('haithamabudraz');
  const [searchInput, setSearchInput] = useState('haithamabudraz');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      if (!username) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('User not found');
          }
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [username]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setUsername(searchInput.trim());
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>

      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder='Enter GitHub username...'
          style={{
            padding: '8px',
            width: '250px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type='submit'
          style={{
            padding: '8px 16px',
            backgroundColor: '#24292e',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </form>

      {loading && <h3>Loading...</h3>}

      {error && <p style={{ color: 'red', marginTop: '10px' }}>❌ {error}</p>}

      {user && !loading && (
        <div
          style={{
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f6f8fa',
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px solid #ddd',
            }}
          />

          <h2>{user.name || user.login}</h2>

          {user.bio && <p>{user.bio}</p>}

          <p>
            <strong>Username:</strong> {user.login}
          </p>

          <p>
            <strong>Followers:</strong> {user.followers}
          </p>

          <p>
            <strong>Following:</strong> {user.following}
          </p>

          <p>
            <strong>Public Repos:</strong> {user.public_repos}
          </p>

          {user.location && (
            <p>
              <strong>Location:</strong> {user.location}
            </p>
          )}

          {user.blog && (
            <p>
              <strong>Website:</strong> <a href={user.blog}>{user.blog}</a>
            </p>
          )}

          <a
            href={user.html_url}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#24292e',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
            }}
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;
