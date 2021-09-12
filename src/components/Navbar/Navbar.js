import React from 'react'
import './Navbar.scss'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='logo'>PECS</div>
                <ul className='nav-links'>
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
                    style={{color:'rgb(253, 245, 124)', fontSize:20}} 
                    
                    className="burger fas fa-circle">
                </i>
                <i 
                    style={{color:'rgb(253, 245, 124)', fontSize:20}} 
                    
                    className="burger far fa-circle">
                </i>
            </nav>    
        </div>
    )
}

export default Navbar
