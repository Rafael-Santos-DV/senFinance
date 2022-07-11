import styled, { css } from 'styled-components';

export const SelectStyle = styled.div<{ activeModel: boolean }>`
  width: 55px;
  height: 25px;
  background-color: ${({ theme: { colors } }) => colors.colorWhite};
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  padding: 4px;
  border: 1px solid ${({ theme: { colors } }) => colors.colorRadiusModelDark};
  height: 20px;

  &::before {
    content: '';
    position: absolute;
    background-color: ${({ theme: { colors } }) => colors.colorRadiusModelDark};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transition: transform 200ms ease;

    ${(props) =>
      props.activeModel
        ? css`
            transform: translateX(calc(100% + 4px));
            background-color: ${({ theme: { colors } }) =>
              colors.colorRadiusModelLight};
          `
        : css`
            transform: translateX(4px);
          `}
  }
`;
