import React from 'react';
import Footer from '../Footer/Footer';
import './Home.scss';
import Home1 from './Home1/Home1';
import Home2 from './Home2/Home2';
import Home3 from './Home3/Home3';
import Home4 from './Home4/Home4';
import Home5 from './Home5/Home5';
import Home6 from './Home6/Home6';

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className='sections'>
                <div className='left-column'> 
                    <h1>Enjoy free & fun Coding Platform for children worldwide.</h1>
                
                    <p>
                    We make coding fun for kids aged 4-18 years. They learn to build apps, websites and other projects with a personal tutor and our standard curriculum.
                    </p>
                </div>

                <div className='right-column'> 
                    <img 
                        src='assets/home1.gif' 
                        alt='home img'
                    />
                </div>

           </div>
            <Home3/>
            <Home1/>
            <Home2/>
            <Home4/>
            <Home5/>
            <Home6/>
            <Footer/>

       </div>
    )
}

export default Home
