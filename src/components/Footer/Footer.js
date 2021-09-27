import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='col'>
                <div className='logo'>
                    <img src='assets/nhlogo.png' alt='logo'/>
                </div>
                <div className='row-2'>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-facebook"></i>
                </div>
                <div className='row-3'>
                    <p>Teach with us</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Blog</p>
                    <p>FAQ</p>
                </div>
                <div className='row-4'>
                    <p> &copy 2021 All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
