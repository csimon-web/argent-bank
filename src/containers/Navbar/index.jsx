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
            <Link className="main-nav-item user" to="/user">
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <span>{user.firstName}</span>
            </Link>
            <Link
              className="main-nav-item sign-out"
              to="/"
              onClick={handleLogout}
            >
              <span>
                <i className="fa-sharp fa-solid fa-right-from-bracket" />
              </span>
              <span>Sign out</span>
            </Link>
          </>
        ) : (
          <Link className="main-nav-item sign-in" to="/sign-in">
            <span>
              <i className="fa-sharp fa-solid fa-right-to-bracket" />
            </span>
            <span>Sign in</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
