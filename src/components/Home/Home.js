import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <div className='home' id='home'>
           <div className='sections'>
                <div className='left-column'> 
                    <h1>PECS</h1>
                    <h3>Live Online Coding classes for your kids</h3>
                    <p>
                    We make coding fun for kids aged 4-18 years. They learn to build apps, websites and other projects with a personal tutor and our standard curriculum.
                    </p>
                
                    <div className='buttons'>
                        <button>Register</button>
                        <button>Join</button>
                    </div>
                </div>

                <div className='right-column'> 
                    <img src='assets/children.jpg' alt=''/>
                </div>
           </div>
        </div>
    )
}

export default Home
