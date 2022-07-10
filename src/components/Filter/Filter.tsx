import React from 'react';
import { Container } from './style';

export const Filter: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <Container style={{ display: active ? 'flex' : 'none' }}>
      <div>
        <span>Categoria</span>
        <label>
          PIX:
          <input name="category" type="radio" value="pix" />
        </label>
        <label>
          TED:
          <input name="category" type="radio" value="ted" />
        </label>

        <label>
          ESPÉCIE:
          <input name="category" type="radio" value="especie" />
        </label>

        <label>
          TODOS:
          <input name="category" type="radio" value="all" />
        </label>
      </div>

      <div>
        <span>Tipo</span>
        <label>
          Entrada:
          <input name="tipo" type="radio" value="input" />
        </label>
        <label>
          Saída:
          <input name="tipo" type="radio" value="output" />
        </label>
        <label>
          Todas
          <input name="tipo" type="radio" value="all" />
        </label>
      </div>
    </Container>
  );
};
