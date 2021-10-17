import React, { Component } from 'react';
import ClassesYoutube from './ClassesYoutube';
import './Classes.scss'

class Classes extends Component {
    render() {
        return (
            <div className='classes'>
                <div className='section'>
                    <div className='right'>
                      <ClassesYoutube videoId='B6IS9dbHtoE' /> 
                    </div>
                    <div className='right'>
                      <ClassesYoutube videoId='B6IS9dbHtoE' /> 
                    </div>
                    <div className='right'>
                      <ClassesYoutube videoId='B6IS9dbHtoE' /> 
                    </div>
                    <div className='right'>
                      <ClassesYoutube videoId='B6IS9dbHtoE' /> 
                    </div>
                    <div className='right'>
                      <ClassesYoutube videoId='B6IS9dbHtoE' /> 
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Classes

