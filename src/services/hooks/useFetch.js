import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = null, mounted = true, initialData = []) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    async function run() {
      const result = await axios.get(url, options?.config);
      if (mounted && result.status === 200) {
        setData(result.data);
      }
    }
    run();
  }, [options]);

  return [data, setData];
};

export default useFetch;
