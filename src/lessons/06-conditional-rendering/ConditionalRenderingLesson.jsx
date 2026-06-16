import { useState } from 'react';
import LoginStatus from './components/LoginStatus';
import UserGreeting from './components/UserGreeting';
import LoadingExample from './components/LoadingExample';

function ConditionalRenderingLesson() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Lesson</h1>

      <LoginStatus />

      <hr />

      <UserGreeting />

      <hr />

      <LoadingExample isLoading={loading} />

      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>
    </div>
  );
}

export default ConditionalRenderingLesson;
