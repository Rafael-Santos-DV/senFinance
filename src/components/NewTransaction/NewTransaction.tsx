import React from 'react';
import Button from '../Button/button';
import {
  BoxTypeAndCategory,
  Category,
  Container,
  ContainerInput,
  ContainerSubmitOrCancel,
  Typetransaction,
} from './style';

export const NewTransaction: React.FC = () => {
  return (
    <Container>
      <h1>Nova Transação</h1>
      <form>
        <ContainerInput>
          <label>
            <span>Nome</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Título</span>
            <input type="text" name="title" required />
          </label>
          <label>
            <span>Preço</span>
            <input type="text" name="price" required />
          </label>
        </ContainerInput>

        <BoxTypeAndCategory>
          <Category>
            <span>Categoria</span>

            <label>
              <span>pix</span>
              <input type="radio" name="price" />
            </label>

            <label>
              <span>ted</span>
              <input type="radio" name="price" />
            </label>

            <label>
              <span>especie</span>
              <input type="radio" name="price" />
            </label>
          </Category>

          <Typetransaction>
            <span>Tipo</span>
            <label>
              <span>ted</span>
              <input type="radio" name="type" value="ted" />
            </label>
            <label>
              <span>pix</span>
              <input type="radio" name="type" value="pix" />
            </label>
          </Typetransaction>
        </BoxTypeAndCategory>

        <ContainerSubmitOrCancel>
          <Button className="cancel" type="button">
            Cancelar
          </Button>
          <Button className="create" type="submit">
            Criar Transação
          </Button>
        </ContainerSubmitOrCancel>
      </form>
    </Container>
  );
};
