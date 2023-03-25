import React from 'react'
import './button.css'

const Button = ({
  title,
  type,
  bgColor,
  width
}) => {

  const buttonStyle = {
    backgroundColor: `${bgColor ? bgColor : 'var(--skyblue-bg)'}`,
    width: `${width ? width : '30%'}`
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