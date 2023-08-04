const Navbar = () => {
    return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cart">Cart</a>
        </li>
      </ul>
    </div>
    <a href="/register" className="mx-3">
    <button type="button" class="btn btn-primary">Register</button>
    </a>

    <a href="/login">
    <button type="button" class="btn btn-primary">Login</button>
    </a>
    
  </div>
</nav>
    );
}
 
export default Navbar;