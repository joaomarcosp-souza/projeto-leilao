import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Recover from './pages/recover-password/Recover';
import Register from './pages/register/Register';
import Change from './pages/change-password/Change';
import PrivateRouter from './components/layouts/PrivateRouter';
import Profile from './pages/profile/Profile';
import LoginLayout from './components/layouts/Login/LoginLayout';
import DefaultLayout from './components/layouts/DefaultLayout';
import { ROUTES } from './routes';

function RedirectToLogin() {
  let navigate = useNavigate();
  React.useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectToLogin />} />
          <Route element={<PrivateRouter />}>
            <Route path={ROUTES.DASHBOARD} element={<DefaultLayout><Home /></DefaultLayout>} />
            <Route path={ROUTES.PERFIL} element={<DefaultLayout><Profile /></DefaultLayout>} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<LoginLayout><Login /></LoginLayout>} />
          <Route path={ROUTES.REGISTER} element={<LoginLayout><Register /></LoginLayout>} />
          <Route path={ROUTES.CHANGE_PASSWORD} element={<LoginLayout><Change /></LoginLayout>} />
          <Route path={ROUTES.RECOVER_PASSWORD} element={<LoginLayout><Recover /></LoginLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
