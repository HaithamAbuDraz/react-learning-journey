import TodoApp from './components/TodoApp';

function PerformanceOptimizationChallenge() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1>Performance Optimization Challenges</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Challenge 2: Todo App with Memoized Items</h2>
        <TodoApp />
      </section>
    </div>
  );
}

export default PerformanceOptimizationChallenge;
