import React from 'react'
import './button.css'

const Button = ({
  title,
  type,
  bgColor,
  width,
  margin
}) => {

  const buttonStyle = {
    backgroundColor: `${bgColor ? bgColor : 'var(--skyblue-bg)'}`,
    width: `${width ? width : '30%'}`,
    margin: margin ? margin : '0.5em 0',
  };

  return (
    <button 
      type={type}
      className="btn"
      style={buttonStyle}
    >
      {title}
    </button>
  )
}

export default Button