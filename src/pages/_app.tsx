import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DataProvider } from '../context/DataProvider';
import { StylesGlobal } from '../styles/StylesGlobal';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <StylesGlobal />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
};

export default App;
