import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <div className='home' id='home'>
            <h1>PECS CODING SCHOOL</h1>
           <div className='sections'>
                <div className='left-column'> 
                    <p>"Lorem ipsum dolor sit 
                        amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className='right-column'> 
                    <img src='assets/children.jpg' alt=''/>
                </div>
           </div>
        </div>
    )
}

export default Home
