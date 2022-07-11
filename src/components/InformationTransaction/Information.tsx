import React from 'react';
import { Container } from './style';
import { format } from 'date-fns';

interface InformationType {
  title: string;
  name: string;
  type: string;
  category: string;
  price: number;
  date: string;
  lastUpdate: string;
  activeInformation: boolean;
  className?: string;
}

export const Information: React.FC<InformationType> = ({
  title,
  name,
  type,
  category,
  price,
  date,
  lastUpdate,
  activeInformation,
  className,
}) => {
  return (
    <Container
      className={className || ''}
      style={{
        display: activeInformation ? 'flex' : 'none',
      }}
    >
      <div>
        <span>Título: </span>
        <strong>{title}</strong>
      </div>
      <div>
        <span>Nome: </span>
        <strong>{name}</strong>
      </div>
      <div>
        <span>Tipo:</span>
        <strong>{type === 'input' ? 'Entrada' : 'Saída'}</strong>
      </div>
      <div>
        <span>Categoria: </span>
        <strong>{category}</strong>
      </div>
      <div>
        <span>preço: </span>
        <strong>
          {price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </div>
      <div>
        <span>Data de criação: </span>
        <strong>{format(new Date(date), 'yyyy-MM-dd')}</strong>
      </div>
      <div>
        <span>Última atualização: </span>
        <strong>{format(new Date(lastUpdate), 'yyyy-MM-dd')}</strong>
      </div>
    </Container>
  );
};
