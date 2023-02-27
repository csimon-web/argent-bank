import React from 'react'
import { useSelector } from 'react-redux'

function UserHeader() {
  const user = useSelector((store) => store.user.user)
  console.log(user)

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user.firstName} {user.lastName}!
      </h1>
      <button type="button" className="edit-button">
        Edit Name
      </button>
    </div>
  )
}

export default UserHeader
