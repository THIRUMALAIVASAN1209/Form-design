import React from 'react'
import './App.css'
import image from "./images/image.webp"

function SlamBook() {
  return (
    <div style={{backgroundImage:`url(${image})`,height: "100vh",
      marginTop: "0px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",}}>
      <h1>Slam Book</h1>
      <form>
      <table>
        <tr>
          <td>NAME:</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>DOB:</td>
          <td><input type="Date" /></td>
        </tr>
        <tr></tr>
        <tr>
        
          <td>NICK NAME:</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>ADDRESS:</td>
          <td><input type="text" id='address' /></td>
        </tr>
        <tr>
          <td>MEMORIES:</td>
          <td><input type="text" id='memories'/></td>
        </tr>
        <tr>
          <td>GENDER:</td>
          <td><input type="radio" name="n"/>Male <input type="radio" name="n" />Female</td>
          
        </tr>
        <tr>
          <td>FAV ACTORS:</td>
          <td><input type="checkbox" />Vijay <input type="checkbox" />Ajith <input type="checkbox" />Rajini Kanth
          <input type="checkbox" />Kamal Haasan</td>
        </tr>
        <tr>
          <td>SCHOOL:</td>
          <td><input type="text" /></td>
        </tr>
      </table>
      </form>
    </div>
  )
}

export default SlamBook
