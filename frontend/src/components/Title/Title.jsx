import React from 'react'
import './title.css'

const Title = ({
  title,
  margin
}) => {
  
  const TitleStyles = {
    margin: margin ? margin : '0'
  };

  return (
    <div className='headerTitle-container' style={TitleStyles}>
      <h1 className='headerTitle'>{title}</h1>
    </div>
  )
}

export default Title