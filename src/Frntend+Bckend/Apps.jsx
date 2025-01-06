import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './User.jsx';
import Createuser from './Createuser.jsx';
import Updateuser from './Updateuser.jsx';

function Apps() {
  return (
    <>
    <Router>
      <div>
      <Link to="/"><button>User</button></Link>
      </div>
      
    <Routes>
            <Route path="/" element={<User />}></Route>
            <Route path="/create" element={<Createuser />}></Route>
            <Route path="/update/:id" element={<Updateuser />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default Apps
