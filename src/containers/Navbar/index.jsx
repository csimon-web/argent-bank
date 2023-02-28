import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, isConnected } from '../../utils/connection'
// import { setUser } from '../../store/userSlice'

// import { removeToken, hasToken } from '../../utils/security'
// import API from '../../services/api'
import { setUser, removeUser } from '../../store/userSlice'
import argentBankLogo from '../../assets/argentBankLogo.png'
import '../../styles/Navbar.css'

function Navbar() {
  // const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user.user)

  const handleLogout = (dispatch) => {
    logout(dispatch)
    navigate('/')
  }

  // if (location.pathname === '/user') {
  //   navigate('/sign-in')
  //   return null
  // }

  // if (
  //   !isConnected &&
  //   (location.pathname !== '/' || location.pathname !== '/sign-in')
  // ) {
  //   navigate('/sign-in')
  //   return null
  // }

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
        {isConnected(user) ? (
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
