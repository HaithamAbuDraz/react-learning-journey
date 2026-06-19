import { useEffect, useState } from 'react';

function GitHubProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          'https://api.github.com/users/haithamabudraz',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();

        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width='120' />
      <h2>{user.name}</h2>
      <p>Location: {user.location}</p>
      <p>Followers: {user.followers}</p>
      <p>Public Repos: {user.public_repos}</p>
    </div>
  );
}

export default GitHubProfile;
