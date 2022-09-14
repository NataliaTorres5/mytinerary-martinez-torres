// import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home.js';
import WebsiteLayout from './Layouts/WebsiteLayout.js';
import UnderConstruction from './Pages/UnderConstruction.js';
import Cities from './Pages/Cities.js';
import NewCity from './Pages/NewCity.js';
import Details from './Pages/Details.js';
import EditCity from './Pages/EditCity';
import MyTineraries from './Pages/MyTineraries.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';




function App() {
  return (

      <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/auth/signin' element={<SignIn />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/newcity' element={<NewCity />} />
          <Route path='/*' element={<UnderConstruction />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/editcity' element={<EditCity />} />
          <Route path='/mytineraries' element={<MyTineraries />} />
        </Routes>
      </WebsiteLayout> 
      </BrowserRouter>

  );
}

export default App;
