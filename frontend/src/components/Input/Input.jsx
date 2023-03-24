import React from 'react'
import './input.css'
import magnifyingGlass from '../../assets/icons/magnifying-glass-solid.svg'

const Input = ({
  hasLabel,
  labelTitle,
  isLabelCenter,
  type,
  nameProp,
  placeholder,
  inputWidth,
  isSearcheable
}) => {

  const labelStyles = {
    color: 'var(--skyblue-bg)',
    textAlign: isLabelCenter ? 'center' : ''
  }

  const inputStyles = {
    width: inputWidth ? inputWidth : '20em',
    // borderRadius: isSearcheable ? '20px 0 0 20px' : '20px'
    backgroundImage: `url(${magnifyingGlass})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `30px`,
    backgroundPosition: '98% 50%'
  }

  return (
    <div className="input-container">
      {
        hasLabel && <label style={labelStyles} className="label-el">{labelTitle}</label>
      }
      <input
        className="input-el"
        type={type} 
        name={nameProp ? nameProp : ''}
        placeholder={placeholder}
        style={inputStyles}
      />
    </div>
  )
}

export default Input