import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Recover from './pages/recover-password/Recover';
import DefaultLayout from './components/DefaultLayout';
import Register from './pages/register/Register';
import Change from './pages/change-password/Change';
import LoginLayout from './components/LoginLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path='/login' element={<LoginLayout><Login /></LoginLayout>} />
          <Route path='/registration' element={<LoginLayout><Register /></LoginLayout>} />
          <Route path='/recover-password' element={<LoginLayout><Recover /></LoginLayout>} />
          <Route path='/change-password' element={<LoginLayout><Change /></LoginLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
