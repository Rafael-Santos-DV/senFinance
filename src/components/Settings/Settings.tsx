import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { DataContextProvider } from '../../context/DataProvider';
import Axios from '../../lib/api/axios';
import Button from '../Button/button';
import { Feedback } from '../Feedback/Feedback';
import { Loading } from '../Loading/Loading';
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
  const [getForm, setForm] = useState<Record<string, string | undefined>>({
    avatar,
    name,
    password,
  });

  const { setRefresh } = useContext(DataContextProvider);

  const [awaitResponse, setAwaitResponse] = useState(false);
  const [getErro, setErro] = useState('');
  const [getSucess, setSucess] = useState('');

  const handleChangeSetForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const removeErro = () => {
    const clear = setTimeout(() => {
      setErro('');
    }, 1200);
    return () => clearTimeout(clear);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!getForm.name) {
      setErro('Nome vazio.');

      return removeErro();
    }

    if (!getForm.password || getForm.password.length < 7) {
      setErro('Senha está vazia ou é inválida!');

      return removeErro();
    }

    setAwaitResponse(true);

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

      setAwaitResponse(false);
      setSucess('Atualizado com sucesso!');
      setRefresh((prev) => !prev);
    } catch (err) {
      setErro('Erro ao processar.');

      return removeErro();
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

        {getErro && <Feedback text={getErro} type="Error" />}
        {awaitResponse && <Loading />}
        {getSucess && <Feedback text={getSucess} type="Sucess" />}

        <Button type="submit">Atualizar Configurações</Button>
      </BoxForm>
    </Container>
  );
};
