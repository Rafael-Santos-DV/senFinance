import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import { Container } from './style';

export const Filter: React.FC<{ active: boolean }> = ({ active }) => {
  const [getFilter, insertFilter] = useState<Record<string, string>>({
    category: 'all',
    type: 'all',
  });

  const { setFilter } = useContext(DataContextProvider);

  useEffect(() => {
    if (getFilter) {
      setFilter(getFilter);
    }
  }, [getFilter]);

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    insertFilter((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Container style={{ display: active ? 'flex' : 'none' }}>
      <div>
        <span>Categoria</span>
        <label>
          PIX:
          <input
            name="category"
            type="radio"
            value="pix"
            onChange={handleChangeFilter}
          />
        </label>
        <label>
          TED:
          <input
            name="category"
            type="radio"
            value="ted"
            onChange={handleChangeFilter}
          />
        </label>

        <label>
          ESPÉCIE:
          <input
            name="category"
            type="radio"
            value="especie"
            onChange={handleChangeFilter}
          />
        </label>

        <label>
          TODOS:
          <input
            name="category"
            type="radio"
            value="all"
            onChange={handleChangeFilter}
          />
        </label>
      </div>

      <div>
        <span>Tipo</span>
        <label>
          Entrada:
          <input
            name="type"
            type="radio"
            value="input"
            onChange={handleChangeFilter}
          />
        </label>
        <label>
          Saída:
          <input
            name="type"
            type="radio"
            value="output"
            onChange={handleChangeFilter}
          />
        </label>
        <label>
          Todas
          <input
            name="type"
            type="radio"
            value="all"
            onChange={handleChangeFilter}
          />
        </label>
      </div>
    </Container>
  );
};
