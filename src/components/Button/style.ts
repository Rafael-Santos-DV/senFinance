import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 100%;
  max-width: 300px;
  background-color: ${({ theme: { colors } }) => colors.colorBlue};
  color: ${({ theme: { colors } }) => colors.colorWhite};
  border: none;
  padding: 14px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 0px 5px ${({ theme: { colors } }) => colors.colorBlue};
  font-size: 1rem;
`;
