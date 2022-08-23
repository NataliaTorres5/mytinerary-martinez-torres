// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import UnderConstruction from './Pages/UnderConstruction';
import WebsiteLayout from './Layouts/WebsiteLayout.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <WebsiteLayout>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cities' element={<Cities />} />
      <Route path='/*' element={<UnderConstruction />} />
      </Routes>
      </WebsiteLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
