import styled, { css } from 'styled-components';

export const Name = styled.strong`
  font-size: 0.9rem;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

export const BoxCategory = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  img {
    width: 20px;
  }
`;

export const BoxType = styled.div<{ type: 'input' | 'output' }>`
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;

  ${(props) =>
    props.type === 'input'
      ? css`
          background-color: ${({ theme: { colors } }) => colors.colorWhite};
          border: 1px solid ${({ theme: { colors } }) => colors.colorGreen};
          color: ${({ theme: { colors } }) => colors.colorGreen};
        `
      : css`
          /* background-color: ${({ theme: { colors } }) => colors.colorRed}; */
          border: 1px solid ${({ theme: { colors } }) => colors.colorRed};
          color: ${({ theme: { colors } }) => colors.colorRed};
        `}

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    padding: 3px 6px;
  }
`;

export const Price = styled.strong<{ type: 'input' | 'output' }>`
  font-weight: bold;

  ${(props) =>
    props.type === 'input'
      ? css`
          color: ${({ theme: { colors } }) => colors.colorGreen};
        `
      : css`
          color: ${({ theme: { colors } }) => colors.colorRed};
        `}
`;

export const DateC = styled.div`
  color: ${({ theme: { colors } }) => colors.colorBlue};
  font-weight: bold;
`;

export const EditAndInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    gap: 10px;

    img {
      width: 16px;
    }
  }
`;
