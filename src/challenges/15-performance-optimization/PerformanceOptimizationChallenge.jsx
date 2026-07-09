import HeavyCalculation from './components/HeavyCalculation';

function PerformanceOptimizationChallenge() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1>Performance Optimization Challenges</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Challenge 3: Heavy Calculation (useMemo)</h2>
        <HeavyCalculation />
      </section>
    </div>
  );
}

export default PerformanceOptimizationChallenge;
