import React from 'react';
import './Update.css';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {
  const nav = useNavigate();
  const {id} = useParams();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");

  const updateUser = (e)=>{
    e.preventDefault();
    axios.put(`https://backend-5p1o.onrender.com/api/user/update/${id}`,{name,email,address})
    .then(result=>{
      console.log("User Updated")
      nav('/')
    })
    .catch(err=>{console.log("Error while updating")})
  }


  return (
    <center>
      <div>
      <h1>Update User</h1>
      <form>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label>E-mail</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <label>Address</label>
        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
        <br />
        <button onClick={updateUser}>Update</button>
      </form>
    </div>
    </center>
  )
}

export default Update
