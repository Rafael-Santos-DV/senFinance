import React from 'react';
import { format } from 'date-fns';

import { BoxCategory, BoxType, DateC, EditAndInfo, Name, Price } from './style';

// images
import pix from '../../assets/icon-pix.svg';
import ted from '../../assets/icon-ted.svg';
import especie from '../../assets/icon-especie.svg';

import iconInfo from '../../assets/icon-info.svg';
import iconEdit from '../../assets/icon-edit.svg';

interface RowTypes {
  name: string;
  category: 'PIX' | 'TED' | 'ESPECIE' | 'pix' | 'ted' | 'especie';
  type: 'input' | 'output';
  price: number;
  date: string;
  onClickShow: () => void;
  onClickEdit: () => void;
}

export const RowTable: React.FC<RowTypes> = ({
  name,
  category,
  type,
  price,
  date,
  onClickShow,
  onClickEdit,
}) => {
  return (
    <tr>
      <td>
        <Name>{name}</Name>
      </td>
      <td>
        <BoxCategory>
          {category === 'PIX' && <img src={pix.src} alt="Pix" />}
          {category === 'TED' && <img src={ted.src} alt="Ted" />}
          {category === 'ESPECIE' && <img src={especie.src} alt="Espécie" />}
          <span>{category}</span>
        </BoxCategory>
      </td>
      <td>
        <BoxType type={type}>{type === 'input' ? 'Entrada' : 'Saída'}</BoxType>
      </td>
      <td>
        {type === 'input' ? (
          <Price type={'input'}>
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Price>
        ) : (
          <Price type={'output'}>
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Price>
        )}
      </td>
      <td>
        <DateC>{format(new Date(date), 'dd/MM/yyyy')}</DateC>
      </td>
      <td>
        <EditAndInfo>
          <img
            src={iconInfo.src}
            alt="Informações"
            title="Informações"
            onClick={onClickShow}
          />
          <img
            src={iconEdit.src}
            alt="Editar"
            title="Editar"
            onClick={onClickEdit}
          />
        </EditAndInfo>
      </td>
    </tr>
  );
};
