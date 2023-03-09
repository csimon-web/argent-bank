import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout, isConnected } from '../../utils/connection'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/Navbar.css'

function Navbar() {
  // const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user.user)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

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
      <div className="main-nav-items">
        {isConnected() ? (
          <>
            <Link className="main-nav-item" to="/user">
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <span>{user.firstName}</span>
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleLogout}>
              <span>
                <i className="fa fa-sign-out" />
              </span>
              <span>Sign Out</span>
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <span>
              <i className="fa-solid fa-user" />
            </span>
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
