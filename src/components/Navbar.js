import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(prop) {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{prop.tittle}</a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{prop.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">contact</a>
        </li>
      </ul>
      <div className="form-check form-switch mx-3">
  <input className="form-check-input" type="checkbox" role="switch" onClick={prop.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
      </div>
   </nav>
   </>
  )
}
Navbar.defaultProps = {tittle : 'default navbar' , home : 'Home'}
