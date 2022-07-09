import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyle } from './style';

type PropsButton = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<PropsButton> = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
