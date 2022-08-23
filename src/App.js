// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import WebsiteLayout from './Layouts/WebsiteLayout.js';
import UnderConstruction from './Pages/UnderConstruction.js';
import Cities from './Pages/Cities.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='*' element={<UnderConstruction />} />
        </Routes>
      </WebsiteLayout> 
      </BrowserRouter>
  );
}

export default App;
