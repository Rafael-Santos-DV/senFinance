import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import { EditTransaction } from '../EditTransaction/EditTransaction';
import { Information } from '../InformationTransaction/Information';
import { RowTable } from '../RowTable/RowTable';
import { Container, Table } from './style';

export const Transactions: React.FC = () => {
  const [activeInfo, setInfo] = useState('none');
  const [activeEdit, setEdit] = useState('null');
  const refTable = useRef(null);

  const { transactions } = useContext(DataContextProvider);

  useEffect(() => {
    if (refTable.current) {
      const element = refTable.current as HTMLElement;
      const elementInformation = document.querySelector(
        `.${activeInfo}`
      ) as HTMLElement;
      const eixoY = elementInformation?.getBoundingClientRect()?.y;

      element.scrollTo(0, eixoY);
    }
  }, [activeInfo, refTable]);

  const handleActiveInfo = (id: string, flag: string) => {
    if (flag + id === activeInfo) {
      setInfo('none');
      return;
    }

    setEdit('null');
    setInfo(`${flag}${id}`);
  };

  const handleActiveEdit = (id: string, flag: string) => {
    if (flag + id === activeEdit) {
      setEdit('null');
      return;
    }

    setInfo('none');
    setEdit(`${flag}${id}`);
  };
  return (
    <Container ref={refTable}>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <>
                <RowTable
                  key={transaction._id}
                  category={transaction.category}
                  date={transaction.dateCreated}
                  name={transaction.name}
                  price={transaction.price}
                  type={transaction.type}
                  onClickShow={() => handleActiveInfo(transaction._id, 'c1-')}
                  onClickEdit={() => handleActiveEdit(transaction._id, 'c2-')}
                />
                <Information
                  key={transaction.title}
                  category={transaction.category}
                  date={transaction.dateCreated}
                  lastUpdate={transaction.lastUpdate}
                  name={transaction.name}
                  price={transaction.price}
                  type={transaction.type}
                  title={transaction.title}
                  activeInformation={
                    activeInfo === `c1-${transaction._id}` ? true : false
                  }
                  className={`c1-${transaction._id}`}
                />

                <EditTransaction
                  removeCard={() => setEdit('null')}
                  transactionId={transaction._id}
                  key={transaction.type}
                  category={transaction.category}
                  name={transaction.name}
                  price={transaction.price}
                  type={transaction.type}
                  title={transaction.title}
                  activeInformation={
                    activeEdit === `c2-${transaction._id}` ? true : false
                  }
                  className={`c2-${transaction._id}`}
                />
              </>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};
