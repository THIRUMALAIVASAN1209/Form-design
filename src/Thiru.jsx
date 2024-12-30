import './Thiru.css'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function Thiru() {

  return (
    <>

    
    <Router>
      <table>
        <tr>
          <td><Link to="/"><img class="logo" src="https://cdn2.vectorstock.com/i/1000x1000/74/56/initial-t-letter-logo-creative-modern-typography-vector-42367456.jpg" alt="Logo" style={{height:"50px"}}/></Link></td>
          <td><Link to="/"><h1 class="web-name" style={{width:"50%"}}>Thiru</h1></Link></td>
          <td class="nav-btns"><Link to="/"><button class="Home">Home</button></Link>
          <Link to="/AboutUs"><button>About Us</button></Link>
          <Link to="/ContactUs"><button>Contact Us</button></Link>
          </td>
        </tr>
      </table>
      <Routes>
        <Route path="/"element={<Home />}></Route>
        <Route path="/AboutUs"element={<AboutUs />}></Route>
        <Route path="/ContactUs"element={<ContactUs />}></Route>

      </Routes>
    </Router>

    <footer style={{color:"white",marginBottom:"0px",height:"60px",alignItems:"center",display:"flex",justifyContent:"center"}}>
      <p style={{fontSize:"larger"}}>© Copyright 2024</p>
    </footer>
    
    </>
    
  )
}

export default Thiru
