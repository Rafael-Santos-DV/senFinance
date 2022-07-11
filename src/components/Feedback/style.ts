import styled, { css } from 'styled-components';

export const Container = styled.div<{ type: 'Error' | 'Sucess' }>`
  display: grid;
  grid-template-columns: 1fr;
  padding: 5px;
  font-weight: bold;
  animation: animation-feed 200ms linear;
  font-size: 0.8rem;

  ${(props) =>
    props.type === 'Sucess'
      ? css`
          color: ${({ theme: { colors } }) => colors.colorGreen};
        `
      : css`
          color: ${({ theme: { colors } }) => colors.colorRed};
        `}

  @keyframes animation-feed {
    0% {
      transform: translateX(-50%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;
