import { Link } from "react-router-dom"
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside" >Logo</div>
        <div className="rightside">
            <Link className="li" to="/">Home</Link>
            <Link className="li" to="/menu">Menu</Link>
            <Link className="li" to="/about">About</Link>
            <Link className="li" to="/contact">Contact</Link>
        </div>
    </div>

  )
}

export default Navbar