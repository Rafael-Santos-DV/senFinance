import React from 'react';
import { Row } from './style';

import { BoxCategory, BoxType, Date, EditAndInfo, Name, Price } from './style';

// images
import pix from '../../assets/icon-pix.svg';
import ted from '../../assets/icon-ted.svg';
import especie from '../../assets/icon-especie.svg';

import iconInfo from '../../assets/icon-info.svg';
import iconEdit from '../../assets/icon-edit.svg';

interface RowTypes {
  name: string;
  category: 'PIX' | 'TED' | 'ESPECIE';
  type: 'input' | 'output';
  price: number;
  date: string;
}

export const RowTable: React.FC<RowTypes> = ({
  name,
  category,
  type,
  price,
  date,
}) => {
  return (
    <Row>
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
          <BoxType type={type}>
            {type === 'input' ? 'Entrada' : 'Saída'}
          </BoxType>
        </td>
        <td>
          {type === 'input' ? (
            <Price type={'input'}>{price}</Price>
          ) : (
            <Price type={'output'}>-{price}</Price>
          )}
        </td>
        <td>
          <Date>{date}</Date>
        </td>
        <td>
          <EditAndInfo>
            <img src={iconInfo.src} alt="Informações" title="Informações" />
            <img src={iconEdit.src} alt="Editar" title="Editar" />
          </EditAndInfo>
        </td>
      </tr>
    </Row>
  );
};
