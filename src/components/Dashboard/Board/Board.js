import React from 'react';
import { Link } from 'react-router-dom';
import './Board.scss';

const Board = () => {
    return (
        <div className='board'>
            <div className='row'>
                <div className='col-1'>
                    <div className='card'>
                        <Link to='/Classes'>
                        <img 
                        src='assets/beginners.gif' 
                        alt=''
                        />
                        </Link>
                    </div>
                </div>

                <div className='col-1'>
                    <div className='card'>
                        <img src='assets/R.gif' alt=''/>
                    </div>
                </div>

                <div className='col-1'>
                    <div className='card'>
                        <img src='assets/advanced.gif' alt=''/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Board
