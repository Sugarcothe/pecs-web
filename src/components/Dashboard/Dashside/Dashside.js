import React from 'react';

const Dashside = () => {
    return (
        <div className='dashside'>
            <div className='section'>
                <div className='col-1'>
                    <img src="assets/nhlogo.png" alt="logo"/>
                </div>

                <div className='col-1'>
                    <div className='icono'>
                        <i class="fas fa-home"></i>
                        <p>Dashboard</p>
                    </div>
                    <div className='icono'>
                        <i class="fas fa-user-graduate"></i>
                        <p>Courses</p>
                    </div>
                    <div className='icono'>
                        <i class="fas fa-child"></i>
                        <p>Kids</p>
                    </div>
                    <div className='icono'>
                        <i class="fas fa-question-circle"></i>
                        <p>FAQs</p>
                    </div>
                    <div className='icono'>
                        <i class="fas fa-sign-out-alt"></i>
                        <p>Logout</p>
                    </div>
                </div>

                <div className='col-1'>
                    <img src='assets/refer.png' alt='refer a friend'/>
                </div>
            </div>
        </div>
    )
}

export default Dashside
