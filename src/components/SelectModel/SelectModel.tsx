import React, { useState } from 'react';
import { SelectStyle } from './style';

export const SelectModel: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleChangeModel = () => {
    setActive((prev) => !prev);
  };

  return <SelectStyle activeModel={active} onClick={handleChangeModel} />;
};
