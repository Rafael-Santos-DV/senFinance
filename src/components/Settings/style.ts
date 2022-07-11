import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  h1 {
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.colorBlue};
  }
`;

export const BoxForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  background-color: ${({ theme: { colors } }) => colors.colorGray};

  button {
    padding: 8px;
    max-width: 200px;
    font-size: 0.7rem;
    margin-top: 20px;
  }

  @media screen and (max-width: 468px) {
    button {
      padding: 10px;
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  display: grid;
  width: 100%;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  span {
    font-size: 0.8rem;
    font-weight: bold;
  }

  input {
    padding: 8px;
    outline: none;
    border: none;
    border-radius: 6px;
    grid-column: 2 / span 3;

    &:disabled {
      border: 1px solid ${({ theme: { colors } }) => colors.colorWhite};
    }
  }

  em {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 468px) {
    flex-direction: column;
    display: flex;
    gap: 20px;
    padding: 10px;

    div {
      text-align: center;
      /* width: 100%; */
    }

    input {
      width: 100%;
      padding: 13px 10px;
    }
  }
`;
