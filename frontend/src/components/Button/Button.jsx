import React from 'react'
import './button.css'

const Button = ({
  title,
  type,
  bgColor,
  onClick
}) => {

  const buttonStyle = {
    backgroundColor: `${bgColor ? bgColor : 'var(--skyblue-bg)'}`,
  };

  return (
    <button 
      type={type}
      className="btn"
      style={buttonStyle}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button