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
  isSearcheable,
  margin,
  colorLabel,
  value,
  isDisabled
}) => {

  const labelStyles = {
    color: colorLabel ? colorLabel : 'var(--skyblue-bg)',
    textAlign: isLabelCenter ? 'center' : ''
  }

  const containerStyles = {
    width: inputWidth ? inputWidth : '40%',
  }

  const inputStyles = {
    backgroundImage: isSearcheable ? `url(${magnifyingGlass})` : '',
    backgroundRepeat: isSearcheable ? `no-repeat` : '',
    backgroundSize: isSearcheable ? `30px` : '',
    backgroundPosition: isSearcheable ? '98% 50%' : '',
    margin: margin ? margin : 0
  }

  return (
    <>
      {
        type === 'textarea' ?
        <div className="input-container" style={containerStyles}>
          {
            hasLabel && <label style={labelStyles} className="label-el">{ labelTitle }</label>
          }
          <textarea
            disabled={isDisabled ? true : false}
            className="input-el-textarea"
            name={nameProp ? nameProp : ''}
            value={value ? value : ''}
            placeholder={placeholder}
            style={inputStyles}
            rows={14}
          />
        </div>
        :
        <div className="input-container" style={containerStyles}>
        {
          hasLabel && <label style={labelStyles} className="label-el">{ labelTitle }</label>
        }
        <input
          value={value ? value : ''}
          className="input-el"
          type={type} 
          name={nameProp ? nameProp : ''}
          placeholder={placeholder}
          style={inputStyles}
        />
      </div>
      }
    </>
  )
}

export default Input