import React from 'react'
import { Link } from 'react-router-dom'

function Profile({logout}) {
  return (
    <>
    <Link to="/dashboard">Dashboard</Link>
    <div>Hi you are Logged In</div>
    <button  onClick={logout}> Logout</button>
    </>
  )
}

export default Profile