import React from 'react'
import './search.css'

export default function Search(props) {
  return (
    <div className='search'>
      <input type="text" name="search" id="" placeholder={props.txt2}/>
      </div>
  )
}
