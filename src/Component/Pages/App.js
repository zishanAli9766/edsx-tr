import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Listkey from '../../FuctoinalComp/Listkey';
import Auth from './Auth';
import Dashboard from './Dashboard';
import Errors from './Errors';
import Profile from './Profile';

function App() {
  const [user,setUser] = useState(null);

  return (
      <>
    <div>App</div>
    <Routes>
        
        {!user && <Route path='/auth' element={<Auth authenticate={() => setUser(true)} />} />}
        {user && (
            <> 
             <Route path='/profile' element={<Profile logout={() => setUser(false)} />} />
        <Route path='/dashboard' element={<Dashboard />} />
            </>
        )}
       {/* <Route path='*' element={<Errors />} /> */}
       <Route path='*' element={<Navigate  to={user ? "/profile" : "/auth"}/>} />
    </Routes>
    <Listkey />
      </>
  )
}

export default App