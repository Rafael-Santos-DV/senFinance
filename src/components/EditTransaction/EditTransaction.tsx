import { ChangeEvent, useContext, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import Axios from '../../lib/api/axios';
import Button from '../Button/button';
import {
  BoxInputs,
  Category,
  Container,
  ContainerPush,
  Content,
  OrdemType,
} from './style';

interface EditType {
  title: string;
  name: string;
  type: string;
  category: string;
  price: number;
  transactionId: string;
  activeInformation: boolean;
  className?: string;
  removeCard: () => void;
}

export const EditTransaction: React.FC<EditType> = ({
  title,
  name,
  type,
  category,
  activeInformation,
  className,
  price,
  transactionId,
  removeCard,
}) => {
  const [getInfo, setInfo] = useState({ category, type, name, price, title });

  const { setRefresh } = useContext(DataContextProvider);

  const handleChangeCategoryAndType = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name: eventName, value } = event.target;

    setInfo((prev) => ({ ...prev, [eventName]: value }));
  };

  const handleChangeUpdate = async (id: string) => {
    try {
      await Axios({
        baseURL: `api/transaction?token=ok&id=${id}`,
        method: 'PUT',
        data: getInfo,
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            't-register-platform'
          )}`,
        },
      });

      setRefresh((prev) => !prev);

      removeCard();
    } catch (err) {
      alert(err);
    }
  };

  const handleChangeRemove = async (id: string) => {
    try {
      await Axios({
        baseURL: `api/transaction?token=ok&id=${id}`,
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            't-register-platform'
          )}`,
        },
      });

      setRefresh((prev) => !prev);

      removeCard();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container
      className={className || ''}
      style={{
        display: activeInformation ? 'flex' : 'none',
      }}
    >
      <div>
        <BoxInputs>
          <label className="name">
            <span>Nome</span>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onChange={handleChangeCategoryAndType}
            />
          </label>
          <label>
            <span>Título</span>
            <input
              type="text"
              name="title"
              defaultValue={title}
              onChange={handleChangeCategoryAndType}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              name="price"
              defaultValue={price}
              onChange={handleChangeCategoryAndType}
            />
          </label>
        </BoxInputs>

        <Content>
          <Category>
            <span>Categoria</span>
            <label>
              PIX:
              <input
                name="category"
                type="radio"
                defaultValue="pix"
                checked={getInfo.category === 'pix' ? true : false}
                onChange={handleChangeCategoryAndType}
              />
            </label>
            <label>
              TED:
              <input
                name="category"
                type="radio"
                defaultValue="ted"
                checked={getInfo.category === 'ted' ? true : false}
                onChange={handleChangeCategoryAndType}
              />
            </label>

            <label>
              ESPÉCIE:
              <input
                name="category"
                type="radio"
                defaultValue="especie"
                checked={getInfo.category === 'especie' ? true : false}
                onChange={handleChangeCategoryAndType}
              />
            </label>
          </Category>

          <OrdemType>
            <span>Tipo</span>
            <label>
              Entrada:
              <input
                name="type"
                type="radio"
                defaultValue="input"
                checked={getInfo.type === 'input' ? true : false}
                onChange={handleChangeCategoryAndType}
              />
            </label>
            <label>
              Saída:
              <input
                name="type"
                type="radio"
                defaultValue="output"
                checked={getInfo.type === 'output' ? true : false}
                onChange={handleChangeCategoryAndType}
              />
            </label>
          </OrdemType>
        </Content>

        <ContainerPush>
          <Button
            className="delete"
            onClick={() => handleChangeRemove(transactionId)}
          >
            Excluir
          </Button>
          <Button
            className="update"
            type="button"
            onClick={() => handleChangeUpdate(transactionId)}
          >
            Atualizar
          </Button>
        </ContainerPush>
      </div>
    </Container>
  );
};
