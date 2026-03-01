import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardPage from './pages/DashboardPage';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';

const pages = [
  { label: 'Dashboard', path: '/' },
  { label: 'Form', path: '/form' },
  { label: 'List', path: '/list' },
];

interface AppProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function App({ isDark, onToggleTheme }: AppProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap sx={{ mr: 4 }}>
              Demo Project
            </Typography>
            <Box sx={{ flexGrow: 1, display: 'flex' }}>
              {pages.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => navigate(page.path)}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    opacity: location.pathname === page.path ? 1 : 0.7,
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
            <IconButton color="inherit" onClick={onToggleTheme}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flex: 1 }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Container>
    </Box>
  );
}
