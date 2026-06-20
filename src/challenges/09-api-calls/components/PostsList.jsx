import { useEffect, useState } from 'react';

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <h2>📝 Loading posts...</h2>;
  }

  if (error) {
    return <h2>❌ Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>Post ID: {post.id}</small>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
