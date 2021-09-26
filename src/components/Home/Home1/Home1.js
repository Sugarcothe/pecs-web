import React from 'react';
import './Home1.scss'

const Home1 = () => {
    return (
        <div className='Home1'>
            <div className='row'>
                <div className='left'>
                    <img src="assets/nice.gif" alt="mission img"/>
                </div>
                <div className='right'>
                    <h2>Our Mission</h2>
                    <p>To be the foremost provider of Industry-leading Technical and Business Skills training institute in Nigeria</p>
                </div> 
            </div>

            <div className='row2'>
                <div className='section'>
                    <div className='left'>
                        <h1>Fun Fact</h1>
                    </div>
                    <div className='right'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Qui dicta minus molestiae vel beatae natus eveniet ratione 
                            temporibus aperiam harum alias officiis assumenda officia 
                            quibusdam deleniti eos cupiditate dolore dolori
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home1
