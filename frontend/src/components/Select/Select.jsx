import React from 'react';
import './select.css'

const Select = ({
    colorLabel,
    isLabelCenter,
    hasLabel,
    labelTitle,
    options, // Espera que cada objeto tenga value y text
    nameProp,
    onChange,
    isDisabled,
    value
}) => {
    
    const labelStyles = {
        color: colorLabel ? colorLabel : 'var(--skyblue-bg)',
        display: 'block',
        textAlign: isLabelCenter ? 'center' : ''
    }
    const inputStyles = {
        backgroundColor: isDisabled ? 'var(--gray-bg)' : '',
        PointerEvent: isDisabled ? 'none' : '',
    }

    return (
        <div className="select-container">
            {
                hasLabel && <label style={labelStyles} className="label-select">{ labelTitle }</label>
            }
            <select name={nameProp} className="select-el" value={value} onChange={onChange} style={inputStyles}>
                {
                    options.map((opt,idx) => {
                        return <option key={idx}  value={opt.value}>{opt.text}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select