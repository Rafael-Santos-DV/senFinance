import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  max-width: 650px;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  border-radius: 10px;
  z-index: 99;

  animation: show-information 200ms ease-in-out;

  @keyframes show-information {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  > div {
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
  }
`;

export const BoxInputs = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  flex-wrap: wrap;

  label {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;

    input {
      width: 100%;
      /* max-width: 200px; */
      padding: 5px;
      border: none;
      border-radius: 5px;
      outline: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex: 50%;
  gap: 30px;
  text-align: center;
`;

export const Category = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    display: flex;
    justify-content: space-between;
  }
`;

export const OrdemType = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;

  label {
    display: flex;
    justify-content: space-between;
    /* max-width: 100px; */
  }
`;

export const ContainerPush = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;

  button {
    padding: 4px;
    max-width: 160px;
    font-size: 0.7rem;
    text-transform: uppercase;

    &.delete {
      background-color: ${({ theme: { colors } }) => colors.colorRed};
      box-shadow: 0px 0px 5px ${({ theme: { colors } }) => colors.colorRed};
    }

    &.update {
      background-color: ${({ theme: { colors } }) => colors.colorGreen};
      box-shadow: 0px 0px 5px ${({ theme: { colors } }) => colors.colorGreen};
    }
  }
`;
