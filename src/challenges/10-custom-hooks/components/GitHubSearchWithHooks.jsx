import { useState } from 'react';
import useFetch from '../../../lessons/10-custom-hooks/hooks/useFetch';
import useInput from '../hooks/useInput';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useLocalStorage from '../hooks/useLocalStorage';

function GitHubSearchWithHooks() {
  const [username, setUsername] = useState('haithamabudraz');
  const searchInput = useInput('haithamabudraz');
  const [recentSearches, setRecentSearches] = useLocalStorage(
    'githubSearches',
    [],
  );

  useDocumentTitle(`GitHub: ${username}`);

  const {
    data: user,
    loading,
    error,
  } = useFetch(`https://api.github.com/users/${username}`);

  const handleSearch = (e) => {
    e.preventDefault();
    const newUsername = searchInput.value.trim();
    if (newUsername) {
      setUsername(newUsername);
      // Add to recent searches
      setRecentSearches((prev) => {
        const filtered = prev.filter((item) => item !== newUsername);
        return [newUsername, ...filtered].slice(0, 5);
      });
    }
  };

  return (
    <div>
      <h2>GitHub User Search with Custom Hooks</h2>

      <form onSubmit={handleSearch}>
        <input
          {...searchInput}
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

      {recentSearches.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <small>Recent searches: </small>
          {recentSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => {
                setUsername(search);
                searchInput.setValue(search);
              }}
              style={{
                margin: '0 5px',
                padding: '2px 8px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
              }}
            >
              {search}
            </button>
          ))}
        </div>
      )}

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
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '2px solid #ddd',
            }}
          />

          <h2>{user.name || user.login}</h2>

          {user.bio && <p>{user.bio}</p>}

          <div style={{ display: 'flex', gap: '20px' }}>
            <p>
              <strong>Followers:</strong> {user.followers}
            </p>
            <p>
              <strong>Following:</strong> {user.following}
            </p>
            <p>
              <strong>Repos:</strong> {user.public_repos}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GitHubSearchWithHooks;
