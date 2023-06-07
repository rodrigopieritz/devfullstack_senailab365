import React from 'react'
import './header.css'
import Profile from '../profile/profile'


export default function Header(props) {
  return (
   
    <div className='bg-blue flex'>
       <a href="https://mail.google.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" width={28} alt="maps-icon"></img> </a>
      <a href="https://www.google.com.br/maps/preview"><img src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA=w240-h480-rw" width={28} alt="maps-icon"></img> </a>
      <img src="https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000" width={28} alt="avatar" />
      <h1> {props.txt2}</h1>
      <Profile/>
    </div>
  )
}
