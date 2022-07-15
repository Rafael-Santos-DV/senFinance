import React, { useEffect, useState } from 'react';
import { BoxPerfil } from './style';

import placeholderImage from '../../assets/placeholder.jpg';

type PerfilType = {
  name: string;
  avatar: string;
  className?: string;
};

export const Perfil: React.FC<PerfilType> = ({ name, avatar, className }) => {
  const [errImage, setImage] = useState(false);

  useEffect(() => {
    setImage(false);
  }, [avatar]);

  return (
    <BoxPerfil>
      <strong className={className}>{name}</strong>
      <img
        src={!errImage ? avatar : placeholderImage.src}
        alt={name}
        onError={(e) => setImage(true)}
      />
    </BoxPerfil>
  );
};
