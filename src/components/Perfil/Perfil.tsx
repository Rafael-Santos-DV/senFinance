import React from 'react';
import { BoxPerfil } from './style';

type PerfilType = {
  name: string;
  avatar: string;
  className?: string;
};

export const Perfil: React.FC<PerfilType> = ({ name, avatar, className }) => {
  return (
    <BoxPerfil>
      <strong className={className}>{name}</strong>
      <img src={avatar} alt={name} />
    </BoxPerfil>
  );
};
