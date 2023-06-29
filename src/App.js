import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
        <Header />
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/cart' element={<Home/>} />
        </Routes>
      
    </div>
  );
}

export default App;
