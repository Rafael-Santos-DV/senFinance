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
