import React from 'react';
import './Home.scss';
import Home2 from './Home2/Home2';
import HomeTestimonial from './Testimonial/HomeTestimonial';

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className='sections'>
                <div className='left-column'> 
                    <h1>Enjoy free & fun Coding Platform for children worldwide.</h1>
                
                    <p>
                    We make coding fun for kids aged 4-18 years. They learn to build apps, websites and other projects with a personal tutor and our standard curriculum.
                    </p>
                
                    <div className='buttons'>
                        <button>Register</button>
                        <button>Join</button>
                    </div>
                </div>

                <div className='right-column'> 
                    <img 
                        src='assets/home1.gif' 
                        alt='home img'
                    />
                </div>
           </div>
        
            <Home2/>
            <HomeTestimonial/>


       </div>
    )
}

export default Home
