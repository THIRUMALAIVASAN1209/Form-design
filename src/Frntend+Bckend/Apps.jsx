import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Userdata from './userdata.jsx';
import Update from './update.jsx';
import Create from './create.jsx';

function Apps() {
  return (
    <>
    <Router>
      <div>
      <Link to="/"><button>User</button></Link>
      </div>
      
    <Routes>
            <Route path="/" element={<Userdata />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default Apps
