import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {location.pathname === '/user' ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle" />
              Tony
            </Link>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-sign-out" />
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
