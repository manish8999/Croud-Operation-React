import React, { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth=localStorage.getItem("user");
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
         <header>
    {/* <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
            <i class="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic </span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple">
            <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-globe fa-fw me-3"></i><span>International</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-users fa-fw me-3"></i><span>Users</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
              class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
        </div>
      </div>
    </nav> */}

    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container-fluid">
      

        <a class="navbar-brand" href="#">
          <img src="uploads/Mjlogo.png" height="25" alt="" loading="lazy" />
        </a>
      

        <ul class="navbar-nav ms-auto d-flex flex-row">


          <li class="nav-item">
            <a class="nav-link me-3 me-lg-0" href="#">
            <button className='btn btn-light'><Link to="/">Product</Link></button>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#">
            <button className='btn btn-light'><Link to="/add">Add Product</Link></button>
            </a>
          </li>
          <li class="nav-item" style={{display:"none"}}>
            <a class="nav-link me-3 me-lg-0" href="#">
            <button className='btn btn-light'><Link to="/update">Update Product</Link></button>
            </a>
          </li> <li class="nav-item">
            <a class="nav-link me-3 me-lg-0" href="#">
            {auth ? <Link to="/signup" onClick={logout}> <button className='btn btn-light'>Logout</button></Link> : <Link to="/signup"> <button className='btn btn-light'>Login</button></Link>}
           
            </a>
          </li>
        
        </ul>
      </div>
    </nav>
  </header>
    )
}

export default Nav;
