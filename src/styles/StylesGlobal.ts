import { createGlobalStyle } from 'styled-components';

export const StylesGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
        transition: color 200ms ease, background-color 200ms ease-in-out;

    }

    html, body {
      width: 100%;
      height: 100%;
    }

    body {
      height: 100vh;
      position: relative;

      &.body-hidden {
        overflow: hidden;
      }
    }

    .color-light {
      color: ${({ theme: { colors } }) => colors.colorWhite};
    }

    &.color-dark {
    background-color: ${({ theme: { colors } }) =>
      colors.colorDarkModeMaster} !important;
  }
`;
