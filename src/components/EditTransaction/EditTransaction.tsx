import { ChangeEvent, useState } from 'react';
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
  activeInformation: boolean;
  className?: string;
}

export const EditTransaction: React.FC<EditType> = ({
  title,
  name,
  type,
  category,
  activeInformation,
  className,
  price,
}) => {
  const [getInfo, setInfo] = useState({ category, type });

  const handleChangeCategoryAndType = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name: eventName, value } = event.target;

    setInfo((prev) => ({ ...prev, [eventName]: value }));
  };

  console.log(getInfo);

  return (
    <Container
      className={className || ''}
      style={{ display: activeInformation ? 'flex' : 'none' }}
    >
      <div>
        <BoxInputs>
          <label className="name">
            <span>Nome</span>
            <input type="text" name="nome" defaultValue={name} />
          </label>
          <label>
            <span>Título</span>
            <input type="text" name="title" defaultValue={title} />
          </label>
          <label>
            <span>Preço</span>
            <input type="text" name="price" defaultValue={price} />
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
          <Button className="delete">Excluir</Button>
          <Button className="update">Atualizar</Button>
        </ContainerPush>
      </div>
    </Container>
  );
};
