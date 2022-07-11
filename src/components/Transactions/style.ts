import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  height: 55vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme: { colors } }) =>
      colors.colorBlackTransparent};
    border-radius: 30px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.colorAside};
    border-radius: 30px;
  }
`;

export const Table = styled.table`
  width: 100%;
  max-width: 500px;
  position: relative;

  thead {
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: ${({ theme: { colors } }) => colors.colorGray};
  }

  th {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    padding-bottom: 5px;
  }

  td {
    padding: 10px 20px;
    /* border: 1px solid red; */
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    th {
      font-size: 0.63rem;
    }
    td {
      font-size: 0.6rem;
      padding: 3px;
    }
  }
`;
