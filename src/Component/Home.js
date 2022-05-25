import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Listkey from '../FuctoinalComp/Listkey';

function Home({logout,user}) {

    // const [text,setText] = useState('');
    const navigate = useNavigate()

    // const data = (e) =>{
    //     setText(e.target.value)
    // }
    const datas = [ 'Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa' ];   
    const handledata = () =>{
      
        navigate('/',{state:{name:datas, id:Date.now(),}}); 
      logout();
    }
    if(!user) {
      return navigate("/");
    }

  
  return (
    <div>Home
        {/* <input onChange={data} type="text" value={text} /> */}
        <div className="card" >
  <img src="https://t4.ftcdn.net/jpg/01/02/54/63/360_F_102546320_2NlJO1Y9UcHRhyqQk0TUtH9Jpq3Ogz2Y.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="btn btn-primary" onClick={handledata}>Goto Info Page</button>
  </div>
</div>
<Listkey />
    </div>
  )
}

export default Home