import React from 'react'
import './button.css'

const Button = ({
  title,
  type,
  bgColor
}) => {

  const buttonStyle = {
    backgroundColor: `${bgColor ? bgColor : 'var(--skyblue-bg)'}`,
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