import React from 'react';
import './Board.scss';

const Board = () => {
    return (
        <div className='board'>
            <div className='row'>
                <div className='col-1'>
                    <div className='card'>
                        <h4>Beginners</h4>
                        <img src='assets/beginners.gif' alt=''/>
                    </div>
                </div>

                <div className='col-1'>
                    <div className='card'>
                        <h4>Beginners</h4>
                        <img src='assets/R.gif' alt=''/>
                    </div>
                </div>

                <div className='col-1'>
                    <div className='card'>
                        <h4>Beginners</h4>
                        <img src='assets/advanced.gif' alt=''/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Board
