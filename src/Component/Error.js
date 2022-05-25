import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();

  return (
    <div><h1>404 Page Not Found</h1>
          <div className="card" >
  <img src="https://miro.medium.com/max/1200/1*cLQUX8jM2bMdwMcV2yXWYA.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="btn btn-primary" onClick={()=> navigate("/")}>Goto Home Page</button>
  </div>
</div>
      </div>
  )
}

export default Error