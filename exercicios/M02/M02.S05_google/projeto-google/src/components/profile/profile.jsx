import React from 'react'
import './profile.css'


export default function Profile(props) {
    return (
      <div className='profile-class'>
        <h2>{props.txt} Rodrigo</h2>
      </div>
    )
  }