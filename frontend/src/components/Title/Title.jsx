import React from 'react'
import './title.css'

const Title = ({title}) => {
  return (
    <div className='headerTitle-container'>
      <h1 className='headerTitle'>{title}</h1>
    </div>
  )
}

export default Title