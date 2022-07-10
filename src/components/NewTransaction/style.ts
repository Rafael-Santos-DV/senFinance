import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.colorBlue};
    padding: 5px;
  }

  form {
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    /* background-color: ${({ theme: { colors } }) => colors.colorWhite}; */
    padding: 25px;
    border-radius: 10px;
    gap: 20px;
  }
`;

export const BoxTypeAndCategory = styled.div`
  width: 100%;
  display: flex;
  gap: 20%;
  text-align: center;
  text-transform: capitalize;
`;

export const ContainerInput = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 10px;

  /* &, */
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  label {
    max-width: 300px;

    input {
      border-radius: 5px;
      border: 1px solid ${({ theme: { colors } }) => colors.colorBlue};
      padding: 5px;
      outline: none;
    }
  }
`;

export const Category = styled.div`
  display: flex;

  flex-direction: column;
  width: 50%;

  > span {
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Typetransaction = styled(Category)``;

export const ContainerSubmitOrCancel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    padding: 5px 3px;
    box-shadow: none;
    max-width: 180px;
    font-size: 0.9rem;
    font-weight: bold;

    &.cancel {
      background-color: ${({ theme: { colors } }) => colors.colorRed};
    }
  }
`;
