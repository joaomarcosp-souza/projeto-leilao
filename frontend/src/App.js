import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
