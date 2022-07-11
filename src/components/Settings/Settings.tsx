import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import Axios from '../../lib/api/axios';
import Button from '../Button/button';
import { BoxForm, Container, Label } from './style';

type TypeSettings = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  clientId: string;
  className: string;
  classForm?: boolean;
};

export const Settings: React.FC<TypeSettings> = ({
  name,
  email,
  avatar,
  password,
  clientId,
  className,
  classForm,
}) => {
  const [getForm, setForm] = useState<Record<string, unknown>>({
    avatar,
    name,
    password,
  });

  const { setRefresh } = useContext(DataContextProvider);

  const handleChangeSetForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await Axios({
        baseURL: `api/register?token=ok&id=${clientId}`,
        method: 'PUT',
        data: getForm,
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
      <h1>Configurações</h1>
      <BoxForm
        onSubmit={handleSubmit}
        className={classForm ? 'color-dark' : ''}
      >
        <Label>
          <span>Nome</span>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChangeSetForm}
          />
        </Label>
        <Label>
          <span>E-mail</span>
          <input type="email" name="email" defaultValue={email} disabled />
        </Label>
        <Label>
          <div>
            <span>Perfil</span> <em>(opcional)</em>
          </div>
          <input
            type="text"
            name="avatar"
            defaultValue={avatar}
            onChange={handleChangeSetForm}
          />
        </Label>
        <Label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            defaultValue={password}
            onChange={handleChangeSetForm}
          />
        </Label>

        <Button type="submit">Atualizar Configurações</Button>
      </BoxForm>
    </Container>
  );
};
