import { useNavigate } from "react-router";


const Navbar2 = () => {
    let navigate =useNavigate()

     const Logout = () => {
        sessionStorage.removeItem("token")
        navigate('/login')
     }
     const User = sessionStorage.getItem('User')
    return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Cart">Cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Welcome {User}</a>
        </li>
    
      </ul>
    </div>
    <a onClick={Logout} >
    <button type="button" class="btn btn-primary">Logout</button>
    </a>

    
  </div>
</nav>
    );
}
 
export default Navbar2;