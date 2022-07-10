import { Filter } from '../Filter/Filter';
import { Transactions } from '../Transactions/Transactions';
import { ContainerTransactions, OneRow } from './style';

// icons
import iconFilter from '../../assets/icon-filter.svg';
import iconRemove from '../../assets/icon-remove.svg';

interface TypeTransaction {
  filter: boolean;
  handleChangeActiveFilter: () => void;
}

export const AllTransactions: React.FC<TypeTransaction> = ({
  handleChangeActiveFilter,
  filter,
}) => {
  return (
    <ContainerTransactions>
      <OneRow>
        <h1>Transações</h1>

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

          <span>Filtros</span>
        </div>
      </OneRow>

      <Filter active={filter} />

      <Transactions />
    </ContainerTransactions>
  );
};
