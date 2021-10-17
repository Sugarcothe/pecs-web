import React, { Component } from 'react';
import ClassesYoutube from './ClassesYoutube';
import './Classes.scss'

function Classes() {
      const Yvideo = [
        {
          lesson:"Lesson One",
          id:"4v1CIKehF6E"
        },
        {
          lesson:"Lesson Two",
          id:"7idQ_C79qwo"
        },
        {
          lesson:"Lesson Three",
          id:"-3oCdNIeU_8"
        },
        {
          lesson:"Lesson Five",
          id:"F6YizEAGge0"
        },
        {
          lesson:"Lesson six",
          id:"7idQ_C79qwo&t=8s"
        },
        {
          lesson:"Lesson six",
          id:"F6YizEAGge0"
        },
        {
          lesson:"Lesson six",
          id:"Y0HI400feLQ"
        },
        {
          lesson:"Lesson six",
          id:"rD4dhVzfCGY"
        },
        {
          lesson:"Lesson six",
          id:"98awWpkx9UM"
        },

      ]
    
        return (
            <div className='classes'>
                <div className='section'>
                  {Yvideo.map((d)=> (
                    <div className='right'>
                      <h3>{d.lesson}</h3>
                      <ClassesYoutube videoId={d.id} /> 
                    </div>
                  ))}
                </div>
            </div>
        )
}

export default Classes

