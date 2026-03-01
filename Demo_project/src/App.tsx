import type { SyntheticEvent } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DashboardPage from './pages/DashboardPage';
import FormPage from './pages/FormPage';
import ListPage from './pages/ListPage';

const routes = ['/', '/form', '/list'];

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const tabIndex = Math.max(0, routes.indexOf(location.pathname));

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    navigate(routes[newValue]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 4 }}>
            Demo Project
          </Typography>
          <Tabs
            value={tabIndex}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Dashboard" />
            <Tab label="Form" />
            <Tab label="List" />
          </Tabs>
        </Toolbar>
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
