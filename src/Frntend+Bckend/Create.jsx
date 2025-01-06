import React, { useState } from 'react'
import './Create.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const nav = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/api/user/create',{name,email,address})
    .then(result => {
      nav('/');
    })
    .catch(err=>{console.log(err)})
  }

  return (
    <center>
    <div>
    <h1>Create User</h1>
    <form onSubmit={submit}>
      <label>Name</label>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <br />
      <label>E-mail</label>
      <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <label>Address</label>
      <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
      <br />
      <button type="submit">Create</button>
    </form>
  </div>
  </center>
  )
}

export default Create
