import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  border-radius: 10px;
  justify-content: space-around;
  gap: 10px;
  padding: 18px;
  background-color: ${({ theme: { colors } }) => colors.colorWhite};

  animation: active-filter 200ms ease;

  div {
    display: flex;
    flex-direction: column;

    > span {
      font-weight: bold;
      font-size: 0.7rem;
      text-transform: uppercase;
      padding-bottom: 5px;
    }

    label {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      font-size: 0.6rem;
    }
  }

  @keyframes active-filter {
    0% {
      display: none;
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
      display: flex;
    }
  }
`;
