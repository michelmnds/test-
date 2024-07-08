import { useState, useEffect } from 'react';

const useQueryParams = key => {
  const [paramValue, setParamValue] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const value = queryParams.get(key);
    setParamValue(value);
  }, [key]);

  return paramValue;
};

export default useQueryParams;
