// import logo from './logo.svg';
import './App.css';

//token

import { useTokenMutation } from './features/userAPI';


//libraries
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'

//pages 
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
import NewItineraryUser from './Pages/NewItinerary'
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

// reducers
import { controlReducer } from './features/userLoggedSlice';





function App() {

useSelector((state)=> console.log(state))
  const logged = useSelector((state) => state.logged.loggedState);
  const user = useSelector((state) => state.logged.user);
  const dispatch = useDispatch();
  const role = user?.role;

  const [token] = useTokenMutation();


  async function verifyToken() {
    try {
      let res = await token(localStorage.getItem("token"));
      if (res.data?.success) {
        dispatch(controlReducer(res.data?.response.user));
      } else {
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("token");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      verifyToken();
    }
  }, []);




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
          <Route path='/mytineraries' element={<MyTineraries />}/>
          <Route path='/newitinerary' element={<NewItineraryUser />} />
        </Routes>
      </WebsiteLayout> 
      </BrowserRouter>

  );
}

export default App;
