import React from 'react'
import { div, Outlet, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
   

  return (
      <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <div className="navbar-brand common"  onClick={()=>{navigate("/")}} state={({isActive})=>{
        return{backgroundColor: isActive ?  "red" : ""}
    }} >Home</div>
    <div  className="navbar-toggler common" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div  className="nav-link active common" aria-current="page" onClick={()=>{navigate("/home/about")}} >About</div>
        </li>
        <li className="nav-item">
          <div   className="nav-link common"onClick={()=>{navigate("/contact")}} >Conctact</div>
        </li>
        <li className="nav-item dropdown">
          <div  className="nav-link dropdown-toggle common"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><div onClick={()=>navigate('/post')}  className="dropdown-item common" >Action</div></li>
            <li><div   onClick={()=>navigate('/home/about')} className="dropdown-item common" >Another action</div></li>
          </ul>
        </li>
        <li className="nav-item">
          <div onClick={()=>navigate('/post')} className="nav-link  common">Post</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
      </>
  )
}

export default Navbar