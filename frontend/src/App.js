import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Recover from './pages/recover-password/Recover';
import DefaultLayout from './components/DefaultLayout';
import Register from './pages/register/Register';
import SimpleLayout from './components/SimpleLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' element={<SimpleLayout><Login /></SimpleLayout>}/>
          <Route path='/recover' element={<SimpleLayout><Recover /></SimpleLayout>}/>
          <Route path='/registration' element={<SimpleLayout><Register /></SimpleLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
