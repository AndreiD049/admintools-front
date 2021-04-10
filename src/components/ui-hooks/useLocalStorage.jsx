import { useEffect, useState } from 'react';

const useLocalStorageState = (
  label,
  initialValue = [],
  transform = (d) => d,
) => {
  const [data, setData] = useState(
    transform(JSON.parse(localStorage.getItem(label))) ?? initialValue,
  );

  useEffect(() => {
    localStorage.setItem(label, JSON.stringify(data));
  }, [data, label]);

  return [data, setData];
};

export default useLocalStorageState;
