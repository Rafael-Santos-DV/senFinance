import React, { useEffect, useRef, useState } from 'react';
import { EditTransaction } from '../EditTransaction/EditTransaction';
import { Information } from '../InformationTransaction/Information';
import { RowTable } from '../RowTable/RowTable';
import { Container, Table } from './style';

export const Transactions: React.FC = () => {
  const [activeInfo, setInfo] = useState('null');
  const [activeEdit, setEdit] = useState('null');
  const refTable = useRef(null);

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

  const handleActiveInfo = (id: string) => {
    if (id === activeInfo) {
      setInfo('null');
      return;
    }

    setEdit('null');
    setInfo(id);
  };

  const handleActiveEdit = (id: string) => {
    if (id === activeEdit) {
      setEdit('null');
      return;
    }

    setInfo('null');
    setEdit(id);
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
          <RowTable
            category="TED"
            date="02/11/2021"
            name="Bartolomeuss"
            price={100}
            type="input"
            onClickShow={() => handleActiveInfo('id')}
            onClickEdit={() => handleActiveEdit('id')}
          />
          <Information
            category="especie"
            date="12/11/2022"
            lastUpdate="13/11/2022"
            name="Rafael"
            price={200}
            type="input"
            title="leafar"
            activeInformation={activeInfo === 'id' ? true : false}
            className="id"
          />

          <EditTransaction
            category="ted"
            name="Rafael"
            price={200}
            type="input"
            title="leafar"
            activeInformation={activeEdit === 'id' ? true : false}
            className="id"
          />
        </tbody>
      </Table>
    </Container>
  );
};
