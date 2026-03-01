import { StrictMode, useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme';
import App from './App';

function Root() {
  const [isDark, setIsDark] = useState(false);
  const theme = useMemo(() => createAppTheme(isDark), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App onToggleTheme={() => setIsDark((prev) => !prev)} isDark={isDark} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>,
);
