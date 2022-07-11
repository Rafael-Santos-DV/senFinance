import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export const SidebarInformations = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.colorAside};
  padding: 25px 35px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContainerLogo = styled.div``;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 60px;

  @media screen and (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const BoxSelect = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;

  color: ${({ theme: { colors } }) => colors.colorWhite};

  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: border-bottom 200ms ease-in;
  padding-bottom: 10px;

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  &.border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const BoxLogout = styled.div`
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 5px
    ${({ theme: { colors } }) => colors.colorBlackTransparent};
  padding: 10px;
  border-radius: 10px;

  gap: 50px;

  justify-content: center;
  align-items: center;

  button {
    background-color: ${({ theme: { colors } }) => colors.colorRed};
    text-transform: uppercase;
    padding: 5px;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.colorGray};
  padding-bottom: 20px;

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px;

    background-color: ${({ theme: { colors } }) => colors.colorWhite};
  }
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.colorGray};
  display: flex;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .children-main {
      order: 2;
    }
  }
`;

export const ContainerGraphic = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.colorWhite};

  @media screen and (max-width: 990px) {
    width: 100%;
    flex-direction: row;
    height: auto;
    justify-content: center;
  }

  > div {
    width: 100%;
  }
  @media screen and (max-width: 468px) {
    flex-direction: column;

    > div {
      margin: 0 auto;
      max-width: 320px;
      display: flex;
      justify-content: center;
    }
  }
`;

export const ContainerAnalitc = styled.div`
  background-color: ${({ theme: { colors } }) => colors.colorBlue};
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  span {
    font-weight: bold;
    font-size: 0.9rem;
  }

  strong {
    color: ${({ theme: { colors } }) => colors.colorWhite};
    font-size: 0.9rem;
  }

  span.transactions {
    color: #000;
  }

  span.amount {
    color: #15fe10;
  }

  span.outputs {
    color: ${({ theme: { colors } }) => colors.colorRed};
  }

  span.inputs {
    color: ${({ theme: { colors } }) => colors.colorGreen};
  }

  @media screen and (max-width: 500px) {
    gap: 10px;
    strong,
    span {
      font-size: 0.6rem;
    }
  }
`;
