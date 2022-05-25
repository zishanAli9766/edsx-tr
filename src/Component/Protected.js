import React from 'react'
import { Navigate, Route } from 'react-router-dom'

function Protected({path,...rest}) {
  return (
      <>
    <div>Protected</div>
     { localStorage.getitem("islogin") ? <Route {...rest} path={path} /> : <Navigate  to={"/"}/>}
      </>
  )
}

export default Protected