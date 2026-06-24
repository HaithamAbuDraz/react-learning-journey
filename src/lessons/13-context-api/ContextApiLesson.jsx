import Dashboard from './components/Dashboard';
import UserProvider from './providers/UserProvider';

function ContextApiLesson() {
  return (
    <UserProvider>
      <div>
        <h1>Context API Lesson</h1>

        <Dashboard />
      </div>
    </UserProvider>
  );
}

export default ContextApiLesson;
