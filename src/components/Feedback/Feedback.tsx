import React from 'react';
import { Container } from './style';

type TypeFeed = {
  type: 'Error' | 'Sucess';
  text: string;
};

export const Feedback: React.FC<TypeFeed> = ({ text, type }) => {
  return (
    <Container type={type}>
      <span>{text}</span>
    </Container>
  );
};
