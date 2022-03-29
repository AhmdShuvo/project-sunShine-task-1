
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
import NotFound from './Components/NotFound/NotFound';
import Cases from './Components/CaseStudies/Cases';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route index element={<Home />}/>
      {/* <privateRoute path="/:serviceId" element={<Detail/>}/> */}
      <Route
            path='services'
            element={
              <PrivateRoute>
                {' '}
                <Services />
              </PrivateRoute>
            }
          ></Route>
      <Route path="about" element={<About/>}/>
      <Route exact={true} path=":serviceId" element={<Detail/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>\
      <Route path="case" element={<Cases/>}/>\
      <Route path='*' component={NotFound} />

    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
