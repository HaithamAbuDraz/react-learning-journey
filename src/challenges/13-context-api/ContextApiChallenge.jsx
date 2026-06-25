import AuthProvider from './providers/AuthProvider';
import LoginStatus from './components/LoginStatus';

function ContextApiChallenge() {
  return (
    <div>
      <h1>Context API Challenges</h1>

      <section>
        <h2>Challenge 2: Auth Context</h2>
        <AuthProvider>
          <LoginStatus />
        </AuthProvider>
      </section>
    </div>
  );
}

export default ContextApiChallenge;
