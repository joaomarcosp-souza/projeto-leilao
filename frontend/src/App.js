import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Recover from './pages/recover-password/Recover';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import Register from './pages/register/Register';
import LoginLayout from './components/LoginLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' element={<LoginLayout><Login /></LoginLayout>}/>
          <Route path='/recover' element={<LoginLayout><Recover /></LoginLayout>}/>
          <Route path='/register' element={<LoginLayout><Register /></LoginLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
