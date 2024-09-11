import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Recover from './pages/recover-password/Recover';
import Register from './pages/register/Register';
import Change from './pages/change-password/Change';
import PrivateRouter from './components/layouts/PrivateRouter';
import Profile from './pages/profile/Profile';
import LoginLayout from './components/layouts/Login/LoginLayout';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>} />
            <Route path='/perfil' element={<DefaultLayout><Profile /></DefaultLayout>} />
          </Route>
          <Route path='/login' element={<LoginLayout><Login /></LoginLayout>} />
          <Route path='/registration' element={<LoginLayout><Register /></LoginLayout>} />
          <Route path='/change-password' element={<LoginLayout><Change /></LoginLayout>} />
          <Route path='/recover-password' element={<LoginLayout><Recover /></LoginLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
