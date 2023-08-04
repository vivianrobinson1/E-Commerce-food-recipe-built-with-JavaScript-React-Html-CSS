import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";



function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/'  element={<Home/>}/>
      <Route exact path='/login'  element={<Login/>}/>
      <Route exact path='/register'  element={<Register/>}/>
      <Route exact path='/cart'  element={<Cart/>}/>
    </Routes>
    </Router>
  );
}

export default App;