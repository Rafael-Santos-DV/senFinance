import styled from 'styled-components';

export const ContainerTransactions = styled.div`
  padding: 5px 40px;
  width: 100%;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const OneRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  h1 {
    font-size: 2.2rem;
    padding-bottom: 5px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    img {
      width: 24px;
    }

    span {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
    justify-content: space-around;

    h1 {
      font-size: 1.3rem;
      padding: 10px 0;
    }
  }
`;
