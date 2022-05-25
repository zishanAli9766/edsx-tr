import React from 'react'
import { useNavigate } from 'react-router-dom'

function Auth({authenticate}) {
    const navigate = useNavigate();
    const handleclickhome = () =>{
        authenticate();
        navigate("/")
    }
  return (
      <>
    <div>Please Login To continue</div>
    <button onClick={handleclickhome}> Authenticate</button>
       </>
  )
}

export default Auth