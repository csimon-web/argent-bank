import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateName } from '../../utils/connection'
import '../../styles/User.css'

function UserHeader() {
  const user = useSelector((store) => store.user.user)
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleSaveName = () => {
    updateName(firstName, lastName)
    setIsEditing(false)
  }

  const editButton = (
    <button
      type="button"
      className="edit-button"
      onClick={() => setIsEditing(true)}
    >
      Edit Name
    </button>
  )

  const saveButton = (
    <button type="button" className="save-button" onClick={handleSaveName}>
      Save
    </button>
  )

  const cancelButton = (
    <button type="button" className="cancel-button" onClick={handleCancel}>
      Cancel
    </button>
  )

  return (
    <div className="header">
      {isEditing ? (
        <div className="form-container">
          <div className="form-row">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-row">
            {saveButton}
            {cancelButton}
          </div>
        </div>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          {editButton}
        </>
      )}
    </div>
  )
}

export default UserHeader
