import React from 'react';
import Board from './Board/Board';
import Dashside from './Dashside/Dashside';
import './Dashboard.scss'



const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Dashside/>  
            <Board/>     
        </div>
    )
}

export default Dashboard
