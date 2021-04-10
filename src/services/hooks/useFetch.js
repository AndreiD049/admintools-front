import {
  useState, useEffect, useRef, useMemo,
} from 'react';
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
  optionsUser,
) => {
  const options = useMemo(() => ({
    ...optionsDefault,
    ...optionsUser,
  }), [optionsUser]);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, ...options.dependencies]);

  return [data, setData];
};

export default useFetch;
