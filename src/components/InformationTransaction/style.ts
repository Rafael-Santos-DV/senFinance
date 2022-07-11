import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  max-width: 650px;
  background-color: ${({ theme: { colors } }) => colors.colorAside};
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  border-radius: 10px;
  margin: 0 auto;
  z-index: 99;

  animation: show-information 200ms ease-in-out;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: capitalize;
      color: ${({ theme: { colors } }) => colors.colorWhite};
    }

    strong {
      font-weight: 100;
      color: ${({ theme: { colors } }) => colors.colorWhite};
    }
  }

  @keyframes show-information {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 830px) {
    max-width: 550px;
  }

  @media screen and (max-width: 468px) {
    max-width: 300px;
  }
`;
