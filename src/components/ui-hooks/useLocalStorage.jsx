import { useEffect, useState } from 'react';

const useLocalStorageState = (label, initialValue = []) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem(label)) ?? initialValue);

  useEffect(() => {
    localStorage.setItem(label, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

export default useLocalStorageState;
