import { ChangeEvent, useContext, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import Axios from '../../lib/api/axios';
import Button from '../Button/button';
import { Feedback } from '../Feedback/Feedback';
import { Loading } from '../Loading/Loading';
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

  const [awaitResponse, setAwaitResponse] = useState(false);
  const [getErro, setErro] = useState('');

  const [getSucess, setSucess] = useState('');

  const { setRefresh } = useContext(DataContextProvider);

  const handleChangeCategoryAndType = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name: eventName, value } = event.target;

    setInfo((prev) => ({ ...prev, [eventName]: value }));
  };

  const removeErro = () => {
    const clear = setTimeout(() => {
      setErro('');
    }, 1200);
    return () => clearTimeout(clear);
  };

  const handleChangeUpdate = async (id: string) => {
    if (!getInfo.category) {
      setErro('Informe a categoria.');

      return removeErro();
    }

    if (!getInfo.name) {
      setErro('Nome vazio.');

      return removeErro();
    }

    if (!getInfo.price || isNaN(Number(getInfo.price))) {
      setErro('Preço inválido.');

      return removeErro();
    }

    if (!getInfo.title) {
      setErro('Título está vazio.');

      return removeErro();
    }

    if (!getInfo.type) {
      setErro('Informe o tipo.');

      return removeErro();
    }

    setAwaitResponse(true);

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
      setSucess('Atualizado com sucesso!');
      setAwaitResponse(false);
      removeCard();
    } catch (err) {
      setErro('Erro ao processar!');

      return removeErro();
    }
  };

  const handleChangeRemove = async (id: string) => {
    setAwaitResponse(true);
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

      setAwaitResponse(false);
      setRefresh((prev) => !prev);
      removeCard();
    } catch (err) {
      setErro('Erro ao processar!');
      setAwaitResponse(false);
      return removeErro();
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

        {getErro && <Feedback text={getErro} type="Error" />}
        {awaitResponse && <Loading />}

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
