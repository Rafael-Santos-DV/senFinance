import React from 'react';
import { RowTable } from '../RowTable/RowTable';
import { Container, Table } from './style';

export const Transactions: React.FC = () => {
  return (
    <Container>
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
        <RowTable
          category="ESPECIE"
          date="12/11/2021"
          name="Rafael"
          price={200}
          type="input"
        />

        <RowTable
          category="PIX"
          date="12/11/2021"
          name="João"
          price={100}
          type="output"
        />

        <RowTable
          category="TED"
          date="02/11/2021"
          name="Bartolomeu"
          price={100}
          type="input"
        />
      </Table>
    </Container>
  );
};
