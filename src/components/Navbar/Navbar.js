import React, {useState} from 'react'
import './Navbar.scss'
import {
    Switch,
    Link
  } from "react-router-dom";


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <Switch>
            <nav>
                <div className='logo'>
                   <img  
                   src='assets/nh-logo.png' alt='logo'
                   />
                </div>
                <ul className='nav-links'
                   style={{transform: open ? "translateX(0px)" : ""}} 
                >
                    <li>
                        <Link to='/Classes'>Join Class</Link>
                    </li>
                    <li>
                        <Link to='/Signin'>Login/Signin</Link>
                    </li>
                </ul>
                <i 
                    onClick={() => setOpen(!open)}
                    style={{color:'rgb(253, 245, 124)', fontSize:20}} 
                    className="burger fas fa-circle">
                </i>
            </nav>    
        </Switch>
    )
}

export default Navbar
