import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { StylesGlobal } from '../styles/StylesGlobal';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <StylesGlobal />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
