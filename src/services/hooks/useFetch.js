import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const optionsDefault = {
  initialData: [],
  dependencies: [],
  callback: null,
  resetData: true,
  skipFirst: false,
};

const useFetch = (
  url,
  params = null,
  optionsUser = {
    initialData: [],
    dependencies: [],
    callback: null,
    resetDataOnChange: true,
    skipFirst: false,
  },
) => {
  const options = {
    ...optionsDefault,
    ...optionsUser,
  };
  const [data, setData] = useState(options.initialData);
  const first = useRef(true);

  useEffect(() => {
    async function run() {
      if (options.skipFirst && first.current) {
        first.current = false;
        return;
      }
      first.current = false;
      if (options.resetDataOnChange) setData(options.initialData);
      const result = await axios.get(url, params);
      if (result.status === 200) {
        setData(options.callback ? options.callback(result.data) : result.data);
      }
    }
    if (url) {
      run();
    }
  }, [url, ...options.dependencies]);

  return [data, setData];
};

export default useFetch;
