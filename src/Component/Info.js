import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Info() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location",location);
  return (
    <div>Information Page <br />
     <h1>{location.state.name}</h1>
            <h3>{location.state.id}</h3>
          <div className="card" >
  <img src="https://www.info-page.ca/public/img/infopagebleu.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="btn btn-primary" onClick={()=> navigate('/')}>Back to Home</button>
  </div>
</div>
           
    </div>
  )
}

export default Info