import { useReducer, useEffect } from 'react';
const useLocalStorageState = (key, initialValue, reducer) => {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(initialValue));
    } catch (e) {
      value = initialValue;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageState