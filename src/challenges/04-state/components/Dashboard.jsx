import { useState } from 'react';

function Dashboard() {
  const [followers, setFollowers] = useState(120);
  const [posts, setPosts] = useState(15);
  const [likes, setLikes] = useState(300);

  return (
    <div>
      <h2>Mini Dashboard</h2>

      <div
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h3>Followers: {followers}</h3>
        <button onClick={() => setFollowers((prev) => prev + 1)}>+1</button>
        <button onClick={() => setFollowers((prev) => prev - 1)}>-1</button>
        <button onClick={() => setFollowers(0)}>Reset</button>
      </div>

      <div
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h3>Posts: {posts}</h3>
        <button onClick={() => setPosts((prev) => prev + 1)}>+1</button>
        <button onClick={() => setPosts((prev) => prev - 1)}>-1</button>
        <button onClick={() => setPosts(0)}>Reset</button>
      </div>

      <div
        style={{ margin: '20px 0', padding: '10px', border: '1px solid #ccc' }}
      >
        <h3>Likes: {likes}</h3>
        <button onClick={() => setLikes((prev) => prev + 1)}>+1</button>
        <button onClick={() => setLikes((prev) => prev - 1)}>-1</button>
        <button onClick={() => setLikes(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Dashboard;
