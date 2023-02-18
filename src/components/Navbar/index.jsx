import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import { authActions } from '../../store'
import { useIsConnected } from '../../utils/authentication.js'
import { logout } from '../../utils/logout.js'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/Navbar.css'

function Navbar() {
  const isConnected = useIsConnected()
  // const dispatch = useDispatch()

  // const authUser = useSelector((state) => state.auth.user)

  const handleLogout = () => {
    logout()
    const navigate = useNavigate()
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
      <div>
        {isConnected ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle" />
              Tony
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleLogout}>
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
