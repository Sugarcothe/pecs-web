import React from 'react'
import './Navbar.scss'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='logo'>PECS</div>
                <ul className='nav-links'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Virtual Classes</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
