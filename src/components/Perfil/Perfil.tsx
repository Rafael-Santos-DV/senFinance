import React from 'react';
import { BoxPerfil } from './style';

type PerfilType = {
  name: string;
  avatar: string;
};

export const Perfil: React.FC<PerfilType> = ({ name, avatar }) => {
  return (
    <BoxPerfil>
      <strong>{name}</strong>
      <img src={avatar} alt={name} />
    </BoxPerfil>
  );
};
