import ProductSearch from './components/ProductSearch';

function PerformanceOptimizationChallenge() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h1>Performance Optimization Challenges</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Challenge 1: Product Search (useMemo)</h2>
        <ProductSearch />
      </section>

    </div>
  );
}

export default PerformanceOptimizationChallenge;
