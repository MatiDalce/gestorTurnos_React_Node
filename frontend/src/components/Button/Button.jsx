import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom';

const Button = ({
  title,
  type,
  bgColor,
  path,
  onClick
}) => {
  const navigate = useNavigate()

  const buttonStyle = {
    backgroundColor: `${bgColor ? bgColor : 'var(--skyblue-bg)'}`,
  };

  // Si llega el path es porque solo es un botón que redirige.
  if(path) {
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
  // Sino es un botón que tiene una funcionalidad
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