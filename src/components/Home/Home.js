import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className='sections'>
                <div className='left-column'> 
                    <h1>CHILDREN CODING SCHOOL</h1>
                    <h3>Onsite/Online Coding classes for your kids</h3>
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
        
            <div className='sections1'>
            <div className='rows'>
                <div className='row1'>
                    <h1>OUR RECORDS SPEAK FOR US</h1>
                </div>
                <div className='row2'>
                    <h2>1K+</h2>
                    <h4>Number of our pupils</h4>
                </div>
                <div className='row3'>
                    <h2>150+</h2>
                    <h4>Average Number of Pupils Yearly</h4>
                </div>
                <div className='row4'>
                    <h2>100+</h2>
                    <h4>Average number of learning materials</h4>
                </div>
                <div className='row4'>
                    <h2>23</h2>
                    <h4>Teachers spread accross the world</h4>
                </div>
            </div>
        </div>
            
            <div className='section2'>
                <div className='house'>
                    <div className='head1'>
                        <h2>Popular courses</h2>
                        <button className='btn1'>
                            Show All
                        </button>
                    </div>
                    <div className='body1'>
                        <div className='row1'>
                            <i class="fas fa-robot"></i>
                            <h4>Robotics</h4>
                        </div>
                        <div className='row2'>
                            <i class="fas fa-robot"></i>
                            <h4>Robotics</h4>
                        </div>
                        <div className='row3'>
                            <i class="fas fa-robot"></i>
                            <h4>Robotics</h4>
                        </div>
                        <div className='row4'>
                            <i class="fas fa-robot"></i>
                            <h4>Robotics</h4>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Home
