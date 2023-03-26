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
  isSearcheable,
  colorLabel,
  value,
  isDisabled,
  onChange
}) => {

  const labelStyles = {
    color: colorLabel ? colorLabel : 'var(--skyblue-bg)',
    textAlign: isLabelCenter ? 'center' : ''
  }

  const inputStyles = {
    backgroundImage: isSearcheable ? `url(${magnifyingGlass})` : '',
    backgroundRepeat: isSearcheable ? `no-repeat` : '',
    backgroundSize: isSearcheable ? `30px` : '',
    backgroundPosition: isSearcheable ? '98% 50%' : '',
  }

  return (
    <>
      {
        type === 'textarea' ?
        <div className="input-container">
          {
            hasLabel && <label style={labelStyles} className="label-el">{ labelTitle }</label>
          }
          <textarea
            disabled={isDisabled ? true : false}
            className="input-el-textarea"
            name={nameProp ? nameProp : ''}
            value={value ? value : ''}
            onChange={onChange}
            placeholder={placeholder}
            style={inputStyles}
            rows={14}
          />
        </div>
        :
        <div className="input-container">
        {
          hasLabel && <label style={labelStyles} className="label-el">{ labelTitle }</label>
        }
        <input
          value={value ? value : ''}
          className="input-el"
          onChange={onChange}
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