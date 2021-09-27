import React from 'react';
import './Home4.scss'

const Home4 = () => {
    return (
        <div className='Home4'>
            <div className='section'>
                <div className='header'>
                    <h3>HOW IT WORKS</h3>
                </div>
                <div className='row'>
                    <div className='row-1'>
                        <div className='col-1'>
                            <i class="fab fa-cloudversify"></i>
                            <p>Personalized live-tutoring experience delivered by our expert Tutors</p>
                        </div>
                        <div className='col-2'>
                            <i class="far fa-play-circle"></i>
                            <p>Pre Recorded Videos by our experienced Tutors</p>
                        </div>
                        <div className='col-3'>
                        <i class="fas fa-trophy"></i>
                            <p>Get a globally recognized Certificate of Completion</p>
                        </div>
                        
                    </div>
                    <div className='row-2'>
                        <img src='assets/star.png' alt='starkids'/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Home4
