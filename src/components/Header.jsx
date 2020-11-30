import React from 'react';
import {NavLink, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
function Navbar()  {
    return (
      <div className="container mb-0">
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink exact activeClassName="navbar-brand" style={{fontSize:"2em"}} className="navbar-brand" to="/">BSc.IT Sy</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-lg-auto">
            <NavLink exact activeClassName="nav-item active" className="nav-item" to="home" style={{ textDecoration: 'none' }} >
              <Link className="nav-link" to="home">HOME</Link>
            </NavLink>
            <NavLink exact activeClassName="nav-item active" className="nav-item" to="syllabus" style={{ textDecoration: 'none' }}>
              <Link className="nav-link" to="syllabus">SYLLABUS</Link>
            </NavLink> 
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-expanded="false">
                TOPICS
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
               <li><NavLink activeClassName="active" className="dropdown-item" to="cpp">CPP</NavLink></li> 
               <li><NavLink activeClassName="active" className="dropdown-item" to="it-tools">IT Tools</NavLink></li>
               <li><NavLink activeClassName="active" className="dropdown-item" to="android">Android</NavLink></li>
               <li><NavLink activeClassName="active" className="dropdown-item" to="pd">Personal Development</NavLink></li>
               <li><NavLink activeClassName="active" className="dropdown-item" to="dbms">DBMS</NavLink></li>
               <li><NavLink activeClassName="active" className="dropdown-item" to="sm">Statistical Methods</NavLink></li>
              </ul>
            </li>
            <NavLink exact activeClassName="nav-item active" className="nav-item" to="about" style={{ textDecoration: 'none' }}><Link className="nav-link" to="about">ABOUT</Link></NavLink>
          </ul>
          </div>
        </nav>
        </div>
    );
};

export default Navbar;