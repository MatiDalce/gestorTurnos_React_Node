import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom';

const Button = ({
  title,
  type,
  bgColor,
  width,
  margin,
  path
}) => {
  const navigate = useNavigate()

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
      onClick={() => navigate(path)}
    >
      {title}
    </button>
  )
}

export default Button