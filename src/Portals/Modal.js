import React from "react"
import  ReactDOM  from "react-dom"

const Modal = () =>{
    return ReactDOM.createPortal(
    <h1>The Modals</h1>,
    document.getElementById('second-root')
    )
  
}

export {Modal}


