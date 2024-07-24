import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path='/home' Component={Home} />
          <Route path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
