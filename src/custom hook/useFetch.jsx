import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
     const signal = abortController.signal;
    async function fetchData(url) {
      try {
        setLoading(true);
        let res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(res);
        } 
          let apiData = await res.json();
          setData(apiData);
        
      } catch (error) {
          if (!signal.aborted) {
            setError(error);
          }
      } finally {
        setLoading(false);
      }
    }
    fetchData(url);
    return () => abortController.abort();
  }, [url]);
  console.log(error);
  return { loading, error, data };
};

export default useFetch;