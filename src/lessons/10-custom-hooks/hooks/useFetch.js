import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDate() {
      try {
        const response =
          await fetch(url);

        if (!response.ok) throw new Error(
          "Request failed"
        );

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    }
    fetchDate();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;