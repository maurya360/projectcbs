import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';



import Header from './components/layout/Header';

import Banners from './components/layout/Banners';
import Footer from './components/layout/Footer';
import About from './components/layout/About';
import CopyRight from './components/layout/CopyRight';
import Cabs from './components/layout/Cabs';
import LoginPage from './components/layout/LoginPage';
import CustomerRegister from './components/layout/CustomerRegister';
import DriverRegister from './components/layout/DriverRegister';
import {BrowserRouter as Router,Route} from "react-router-dom"
import Banner from './components/layout/Banners';
import Admin from './components/layout/Admin.js';
import CustomerCab from './components/CustomerPages/CustomerCab';
import DriverDetailAuto from './components/CustomerPages/DriverDetailAuto';
import DriverDetailmini from './components/CustomerPages/DriverDetailmini';
import DriverDetailPrime from './components/CustomerPages/DriverDetailPrime';
import AllTrips from './components/layout/AllTrips';
import Logincustomer from './components/Loginpage/Logincustomer';
import Logindriver from './components/Loginpage/Logindriver';
import Loginadmin from './components/Loginpage/Loginadmin';
import DriverWelcome from './components/DriverPages/DriverWelcome';
import CustomerDash from './components/CustomerPages/CustomerDash';





function App() {
  return (
    
    <Router>
    <div className="App">
    <Header/>
    <LoginPage/>
    <Route path="/home" component={Banner}/>
     <Route path="/cabs" component={Cabs}/>
     <Route path="/about" component={About}/>
     
     <Route path="/contact" component={Footer}/>
     <Route path="/customerregister" component={CustomerRegister}></Route>
     <Route path="/driverregister" component={DriverRegister}></Route>
     <Route path="/selectcabpage" component={CustomerCab}></Route>
     <Route path="/driverfirstpage" component={DriverDetailAuto}></Route>
     <Route path="/driversecondpage" component={DriverDetailmini}></Route>
     <Route path="/driverthiredpage" component={DriverDetailPrime}></Route>
     <Route path="/alltrips" component={AllTrips}></Route>

     <Route path="/logincustomerpage" component={Logincustomer}></Route>
     <Route path="/logindriverpage" component={Logindriver}></Route>
     <Route path="/loginadminpage" component={Loginadmin}></Route>
     <Route path="/adminhome" component={DriverWelcome}></Route>
     <Route path="/adminpath" component={Admin}/>
     <Route path="/costomerschedule" component={CustomerDash}/>

     
    
    
     <Footer/>
     <CopyRight/>
   </div>
   </Router>
   
  );
}

export default App;
