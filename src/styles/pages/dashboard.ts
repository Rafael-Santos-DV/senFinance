import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export const SidebarInformations = styled.aside`
  background-color: ${({ theme: { colors } }) => colors.colorAside};
  padding: 25px 35px;
`;

export const ContainerLogo = styled.div``;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 60px;
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
`;

export const ContainerTransactions = styled.div`
  padding: 50px;
  width: 100%;
`;

export const OneRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 24px;
    }

    span {
      font-size: 1.2rem;
    }
  }
`;

export const ContainerGraphic = styled.div`
  width: 100px;
  border: 1px solid red;
`;
