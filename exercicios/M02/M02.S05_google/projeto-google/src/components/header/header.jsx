import React from 'react'
import './header.css'
import Profile from '../profile/profile'


export default function Header(props) {
  return (
    <div className='bg-blue flex'>
      <h1> {props.txt2}
        </h1><Profile/>
    </div>
  )
}
