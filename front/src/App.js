import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/' Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
