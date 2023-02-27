import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { authActions } from '../../store'
import { useIsConnected, logout } from '../../utils/connection.js'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/Navbar.css'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isConnected = useIsConnected()
  const user = useSelector((store) => store.user.user)
  // const dispatch = useDispatch()

  // const authUser = useSelector((state) => state.auth.user)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (
    !isConnected &&
    (location.pathname !== '/' || location.pathname !== '/sign-in')
  ) {
    navigate('/sign-in')
    return null
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
              {user.firstName}
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
