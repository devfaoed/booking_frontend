import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"; 

// importing pages

import Home from './pages/home/home';
import List from './pages/list/list';
import Hotel from './pages/hotel/hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
