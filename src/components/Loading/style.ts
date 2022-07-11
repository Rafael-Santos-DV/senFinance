import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  z-index: 1;
`;

export const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 14px solid ${({ theme: { colors } }) => colors.colorBlue};
  border-top: 14px solid ${({ theme: { colors } }) => colors.colorGreen};
  animation: animation-load 1s linear infinite;

  @keyframes animation-load {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
