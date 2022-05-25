import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate();
  return (
    <div>Contact
      <div className="card" >
  <img src="https://images.unsplash.com/photo-1650117811472-d5a3d002c232?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="btn btn-primary" onClick={()=> navigate("/")}>Go somewhere</button>
  </div>
</div>
    </div>
  )
}

export default Contact