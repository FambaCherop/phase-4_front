import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './Navbar';
import List from './pages/novels/novellist';
import Noveldetail from './pages/novels/noveldetail';

function App() {
  const [novels, setNovels] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/novels/list')
      .then(res => res.json())
      .then(data => setNovels(data.novels)) 
      .catch(error => console.error('Error fetching novels', error));
  }, []); 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/novellist' element={<List novels={novels} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/novellist/:title' element={<Noveldetail novels = {novels}/>} />


      </Routes>
    </>
  );
}

export default App;

