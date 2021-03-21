import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = null, initialData = [], dependencies = [], cb = null) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    async function run() {
      setData(initialData);
      const result = await axios.get(url, options);
      if (result.status === 200) {
        setData(cb ? cb(result.data) : result.data);
      }
    }
    if (url) {
      run();
    }
  }, [url, ...dependencies]);

  return [data, setData];
};

export default useFetch;
