
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Detail from './Components/Services/Detail';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import About from './Components/AboutUs/About';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route index element={<Home />}/>
      {/* <privateRoute path="/:serviceId" element={<Detail/>}/> */}
      <Route
            path='/:serviceId'
            element={
              <PrivateRoute>
                {' '}
                <Detail />
              </PrivateRoute>
            }
          ></Route>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
