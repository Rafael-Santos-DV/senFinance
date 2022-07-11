import styled from 'styled-components';

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerLeft = styled.aside`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.colorGray};

  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  @media screen and (max-width: 800px) {
    order: 2;
  }
`;

export const ContentLogo = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.colorWhite};
  padding: 10px;
  display: flex;
  justify-content: center;

  &.content-mobile {
    display: none;
  }

  @media screen and (max-width: 800px) {
    display: none;

    &.content-mobile {
      display: flex;
    }
  }

  img {
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    max-width: 300px;
  }
`;

export const BoxForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 0 20px;

  form {
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* align-items: center; */

    padding-bottom: 10px;
    line-height: 1.2;

    h2 {
      font-size: 2rem;
      color: ${({ theme: { colors } }) => colors.colorBlue};
    }

    p {
      font-size: 1rem;
      padding: 5px 0;
      font-weight: 200;
      color: #9e9e9e;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 20px;
    text-align: center;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 0;

  padding-bottom: 20px;

  border-bottom: 1px solid
    ${({ theme: { colors } }) => colors.colorBlackTransparent};

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.8rem;
      font-weight: bold;

      em {
        font-size: 0.6rem;
      }
    }

    input {
      padding: 6px 8px;
      width: 100%;
      max-width: 300px;
      border-radius: 5px;
      border: none;

      &:focus {
        outline: 1px solid ${({ theme: { colors } }) => colors.colorBlue};
      }
    }
  }

  @media screen and (max-width: 800px) {
    label {
      flex-direction: column;
      gap: 5px;

      input {
        padding: 15px 8px;
        max-width: 100%;
      }
    }
  }

  @media screen and (max-width: 468px) {
    label {
      flex-direction: column;
      gap: 5px;

      input {
        padding: 14px 8px;
        max-width: 100%;
      }
    }
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;

  padding-top: 20px;
  justify-content: space-between;

  display: flex;

  &.container-register-buttons {
    justify-content: center;
    align-items: center;
  }

  button {
    width: 46%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.8rem;

    img {
      width: 22px;
    }

    &.button-google {
      background-color: ${({ theme: { colors } }) => colors.colorWhite};
      border: 1px solid ${({ theme: { colors } }) => colors.colorBlue};
      color: ${({ theme: { colors } }) => colors.colorBlue};
      box-shadow: none;
    }
  }

  @media screen and (max-width: 390px) {
    button {
      font-size: 0.5rem;
      padding: 2%;

      img {
        width: 15px;
      }
    }
  }
`;

export const Register = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0;

  a {
    padding-left: 8px;
    color: ${({ theme: { colors } }) => colors.colorBlue};
    font-weight: bold;
  }
`;

export const ContainerRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.colorBlue};
  flex-direction: column;
  text-align: center;
  padding: 5px;

  div {
    padding: 10px;

    img {
      width: 100%;
      max-width: 450px;
      margin-bottom: 40px;
    }
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.colorWhite};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme: { colors } }) => colors.colorWhite};
  }

  @media screen and (max-width: 878px) {
    h1 {
      font-size: 1rem;
      color: ${({ theme: { colors } }) => colors.colorWhite};
    }

    div {
      padding: 10px;

      img {
        width: 100%;
        max-width: 280px;
        margin-bottom: 40px;
      }
    }

    p {
      color: ${({ theme: { colors } }) => colors.colorWhite};
    }
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;

    div {
      img {
        width: 100%;
        max-width: 200px;
        margin-bottom: 20px;
      }
    }
  }
`;
