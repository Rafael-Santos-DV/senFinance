import { Filter } from '../Filter/Filter';
import { Transactions } from '../Transactions/Transactions';
import { ContainerTransactions, OneRow } from './style';

// icons
import iconFilter from '../../assets/icon-filter.svg';
import iconRemove from '../../assets/icon-remove.svg';
import { useContext, useEffect, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';

interface TypeTransaction {
  filter: boolean;
  handleChangeActiveFilter: () => void;
  className: string;
  isMobile: boolean;
}

export const AllTransactions: React.FC<TypeTransaction> = ({
  handleChangeActiveFilter,
  filter,
  className,
  isMobile,
}) => {
  const { getModel } = useContext(DataContextProvider);
  // const [model, setModel] = useState(getModel);

  // useEffect(() => {
  //   setModel(getModel);
  // }, [getModel]);

  return (
    <ContainerTransactions className={className}>
      <OneRow>
        <h1 className={getModel ? 'color-light' : ''}>Transações</h1>

        <div onClick={handleChangeActiveFilter}>
          <img
            src={iconFilter.src}
            alt="Filter"
            style={{ display: filter ? 'none' : 'initial' }}
          />

          <img
            src={iconRemove.src}
            alt="Cancelar"
            style={{ display: filter ? 'initial' : 'none' }}
          />

          <span className={`${getModel ? 'color-light' : ''}`}>Filtros</span>
        </div>
      </OneRow>

      <Filter active={filter} />

      {!isMobile && <Transactions />}
    </ContainerTransactions>
  );
};
