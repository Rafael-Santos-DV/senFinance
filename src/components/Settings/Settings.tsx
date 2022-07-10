import Button from '../Button/button';
import { BoxForm, Container, Label } from './style';

type TypeSettings = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
};

export const Settings: React.FC<TypeSettings> = ({
  name,
  email,
  avatar,
  password,
}) => {
  return (
    <Container>
      <h1>Configurações</h1>
      <BoxForm>
        <Label>
          <span>Nome</span>
          <input type="text" name="name" defaultValue={name} />
        </Label>
        <Label>
          <span>E-mail</span>
          <input type="email" name="email" defaultValue={email} disabled />
        </Label>
        <Label>
          <div>
            <span>Perfil</span> <em>(opcional)</em>
          </div>
          <input type="text" name="avatar" defaultValue={avatar} />
        </Label>
        <Label>
          <span>Senha</span>
          <input type="password" name="password" defaultValue={password} />
        </Label>

        <Button>Atualizar Configurações</Button>
      </BoxForm>
    </Container>
  );
};
