import React, { useContext } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import { SelectStyle } from './style';

export const SelectModel: React.FC = () => {
  const { setModel, getModel } = useContext(DataContextProvider);

  const handleChangeModel = () => {
    setModel((prev) => !prev);
  };

  return (
    <SelectStyle
      className={`model`}
      activeModel={getModel}
      onClick={handleChangeModel}
    />
  );
};
