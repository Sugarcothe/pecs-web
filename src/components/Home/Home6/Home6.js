import React, { Component } from 'react';
import ExampleYoutube from './Youtube';
import './Home6.scss'

class Youtube extends Component {
    render() {
        return (
            <div className='Home6'>
                <div className='section'>
                    <div className='left'>
                        <h4>
                            Watch an Introductory Video Now!!!
                        </h4>
                    </div>
                    <div className='right'>
                     <ExampleYoutube videoId='B6IS9dbHtoE' /> 
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Youtube
