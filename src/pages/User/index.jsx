import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useIsConnected } from '../../utils/connection.js'
import { hasToken } from '../../utils/security.js'
import API from '../../services/api.js'
import { addUser, setUser } from '../../store/userSlice'
import UserHeader from '../../containers/UserHeader'
import '../../styles/User.css'

function User() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isConnected = useIsConnected()
  const [isLoading, setIsLoading] = useState(true)

  if (hasToken()) {
    const fetchData = async () => {
      try {
        const data = await API.getUserData()
        dispatch(
          setUser({
            id: data.id,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            isConnected: true,
          })
        )
        // dispatch(setUser())
      } catch (error) {
        console.error(error)
        // handle error
      }
    }
    fetchData()
  }

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const token = localStorage.getItem('token')
  //       if (!token) {
  //         throw new Error('Not authenticated')
  //       }
  //       // Add code here to verify the token with your API
  //       setIsLoading(false)
  //     } catch (error) {
  //       setIsLoading(false)
  //       navigate('/sign-in')
  //     }
  //   }
  //   checkAuth()
  // }, [navigate])

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (!isConnected) {
  //   return <div>You are not authenticated.</div>
  // }

  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default User
