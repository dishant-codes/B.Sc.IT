import React from 'react';
import {NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar()  {
  
  const not_avl = () =>{
    toast.error("This page is not Available !");
  } 
    
    return (
      <>
      <div className="mb-0 mx-3">
      <nav className="navbar navbar-expand-lg navbar-dark">
           <NavLink exact style={{fontSize:"2em",color:"white"}} className="navbar-brand" to="/B.Sc.IT">BSc.IT Sy</NavLink>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ml-lg-auto">
           <NavLink exact activeClassName="active" className="nav-item" to="/B.Sc.IT/home" style={{ textDecoration: 'none',color:"white" }} >
             <a className="nav-link" href="!#" >HOME</a>
           </NavLink>
           <NavLink exact activeClassName="active" className="nav-item" to="/B.Sc.IT/syllabus" style={{ textDecoration: 'none' }}>
             <a className="nav-link" href="!#" >SYLLABUS</a>
           </NavLink> 
           <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-expanded="false">
               SUBJECTS
             </a>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><NavLink exact activeClassName="active" className="dropdown-item" to="/B.Sc.IT/cpp" >C++</NavLink></li> 
              <li><NavLink exact activeClassName="active" className="dropdown-item" to="/B.Sc.IT/it-tools">IT Tools</NavLink></li>
              <li><NavLink exact activeClassName="active" className="dropdown-item" to="/B.Sc.IT/android" >Android</NavLink></li>
              <li><NavLink exact activeClassName="active" className="dropdown-item" to="/B.Sc.IT/pd" onClick={not_avl}>Personal Development</NavLink></li>
              <li><NavLink exact activeClassName="active" className="dropdown-item" to="/B.Sc.IT/dbms" onClick={not_avl}>DBMS</NavLink></li>
              <li><NavLink exact activeClassName="active" className="dropdown-item" to="/B.Sc.IT/sm" onClick={not_avl}>Statistical Methods</NavLink></li>
             </ul>
           </li>
           <NavLink exact activeClassName="nav-item active" className="nav-item" to="/B.Sc.IT/contact" style={{ textDecoration: 'none' }}><a className="nav-link" href="!#">CONTACT US</a></NavLink>
         </ul>
         </div>
       </nav>
       </div>
       <ToastContainer position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />
       </>
    );
};

export default Navbar;