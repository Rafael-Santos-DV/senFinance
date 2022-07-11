import Router from 'next/router';
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import Axios from '../../lib/api/axios';
import Button from '../Button/button';
import {
  BoxTypeAndCategory,
  Category,
  Container,
  ContainerInput,
  ContainerSubmitOrCancel,
  Typetransaction,
} from './style';

export const NewTransaction: React.FC<{ className: string }> = ({
  className,
}) => {
  const [getInfo, setInfo] = useState({
    category: '',
    type: '',
    name: '',
    price: '',
    title: '',
  });

  const { setRefresh } = useContext(DataContextProvider);

  const handleChangeNewTransaction = (event: ChangeEvent<HTMLInputElement>) => {
    const { name: eventName, value } = event.target;

    setInfo((prev) => ({ ...prev, [eventName]: value }));
  };

  const handleChangeSubmitTransaction = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await Axios({
        baseURL: `api/transaction?token=ok`,
        method: 'POST',
        data: getInfo,
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            't-register-platform'
          )}`,
        },
      });

      setRefresh((prev) => !prev);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container className={className}>
      <h1>Nova Transação</h1>
      <form onSubmit={handleChangeSubmitTransaction}>
        <ContainerInput>
          <label>
            <span>Nome</span>
            <input
              type="text"
              name="name"
              required
              onChange={handleChangeNewTransaction}
            />
          </label>
          <label>
            <span>Título</span>
            <input
              type="text"
              name="title"
              required
              onChange={handleChangeNewTransaction}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              name="price"
              required
              onChange={handleChangeNewTransaction}
            />
          </label>
        </ContainerInput>

        <BoxTypeAndCategory>
          <Category>
            <span>Categoria</span>

            <label>
              <span>pix</span>
              <input
                type="radio"
                value="pix"
                name="category"
                onChange={handleChangeNewTransaction}
              />
            </label>

            <label>
              <span>ted</span>
              <input
                type="radio"
                name="category"
                value="ted"
                onChange={handleChangeNewTransaction}
              />
            </label>

            <label>
              <span>especie</span>
              <input
                type="radio"
                name="category"
                value="especie"
                onChange={handleChangeNewTransaction}
              />
            </label>
          </Category>

          <Typetransaction>
            <span>Tipo</span>
            <label>
              <span>Entrada</span>
              <input
                type="radio"
                name="type"
                value="input"
                onChange={handleChangeNewTransaction}
              />
            </label>
            <label>
              <span>Saída</span>
              <input
                type="radio"
                name="type"
                value="output"
                onChange={handleChangeNewTransaction}
              />
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
