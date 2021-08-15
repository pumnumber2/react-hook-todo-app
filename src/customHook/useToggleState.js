import { useState } from 'react';

const useToggle = (intialValue = false) => {
  const [checked, setState] = useState(intialValue);
  const toggle = () => {
    setState(!checked);
  };
  return [checked, toggle];
};

export default useToggle;