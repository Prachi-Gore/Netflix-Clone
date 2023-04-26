import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login  from "./Pages/Login/Login"
import Home  from "./Pages/Home/Home";
import Register from "./Pages/Register/Register"
import Watch from "./Pages/Watch/Watch"
import './App.scss';




const App=()=> {
  return (
    
     <Router>
   <div className='appdiv'>
     
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
       
      </Routes>
   </div>
     </Router>  
     
   
  );
}

export default App;
