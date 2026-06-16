function LoadingExample({ isLoading }) {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <h2>Data Loaded Successfully</h2>;
}

export default LoadingExample;
