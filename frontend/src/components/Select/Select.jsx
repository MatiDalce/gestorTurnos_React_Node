import React from 'react';
import './select.css'

const Select = ({
    colorLabel,
    isLabelCenter,
    hasLabel,
    labelTitle,
    inputWidth,
    options,
    nameProp
}) => {
    
    const labelStyles = {
        color: colorLabel ? colorLabel : 'var(--skyblue-bg)',
        textAlign: isLabelCenter ? 'center' : ''
    }
    
    const containerStyles = {
        width: inputWidth ? inputWidth : '40%',
    }

    return (
        <div className="select-container" style={containerStyles}>
            {
                hasLabel && <label style={labelStyles} className="label-select">{ labelTitle }</label>
            }
            <select name={nameProp} className="select-el">
                {
                    options.map((opt,idx) => {
                        return <option key={idx} value={opt.value}>{opt.text}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Select