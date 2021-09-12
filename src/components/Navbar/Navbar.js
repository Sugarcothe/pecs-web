import React, {useState} from 'react'
import './Navbar.scss'


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <nav>
                <div className='logo'>PECS</div>
                <ul className='nav-links'
                   style={{transform: open ? "translateX(0px)" : "translateX(-500px)"}} 
                >
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Classes</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
                <i 
                    onClick={() => setOpen(!open)}
                    style={{color:'rgb(253, 245, 124)', fontSize:20}} 
                    className="burger fas fa-circle">
                </i>
            </nav>    
        </div>
    )
}

export default Navbar
