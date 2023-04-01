import React, { useState } from 'react';
import './checkbox.css';

const Checkbox = ({
    onlyCheckboxes, // IMPORTANTE: Solo checkboxes (sino no aparece nada)
    withText, // IMPORTANTE: Checkbox y text (sino no aparece nada)
    nameProp, // IMPORTANTE: Es el name y es necesaria para diferenciar los inputs checkbox
    options, // IMPORTANTE: Las opciones
    oneChoice, // Si solo se puede elegir una opción
    colorLabel,
    hasLabel, // Si tiene o no label
    labelTitle,
    isLabelCenter, // Label centrado
    value, // Para el input texto
    placeholder, // Para el input texto
    onChange, // Para el input texto
    checkValue,
}) => {
    const [selectedOption, setSelectedOption] = useState(oneChoice ? null : []);
    const [activeOptions, setActiveOptions] = useState(false);
    
    const handleSelect = (event) => {
        const { value } = event.target;
        if (oneChoice) {
            setSelectedOption(value);
            
        } else {
            if (selectedOption.includes(value)) {
                setSelectedOption(selectedOption.filter((option) => option !== value));
            } else {
                setSelectedOption([...selectedOption, value]);
            }
        }
    };

    const handleYesOrNo = (value) => {
        if(value === 'yes') {
            setActiveOptions(true);
        } else {
            setActiveOptions(false);
        }
    }

    const labelStyles = {
        color: colorLabel ? colorLabel : 'var(--skyblue-bg)',
        textAlign: isLabelCenter ? 'center' : ''
    }

    return (
        <>
        {/* CHECKBOXES BOOLEANOS QUE ACTIVAN UN INPUT */}
        {
            withText && 
            <div className="checkboxesAndText">
                { // Si tiene label
                    hasLabel && <label style={labelStyles} className="label-checkbox">{ labelTitle }</label>
                }
                <div className="checkboxQuestion">
                    { // Si debe desactivar el input al ser el valor "no"
                        <div className="yesOrNoCheckboxes">
                            <label className='labelWithText'>{withText}</label>
                            <div className="yesOrNoCheckBox">
                                <label className='labelYesOrNo'> Sí </label>
                                <input name={`yesOrNo` + nameProp} type="radio" onClick={() => handleYesOrNo('yes')} className="checkbox-input" />
                            </div>
                            <div className="yesOrNoCheckBox">
                                <label className='labelYesOrNo'> No </label>
                                <input name={`yesOrNo` + nameProp} type="radio" onClick={() => handleYesOrNo('no')} className="checkbox-input" />
                            </div>
                        </div>
                    }
                    <input className={`text-for-checkbox ${!activeOptions && 'disabled'}`} placeholder={placeholder} type='text' value={value} onChange={onChange} />
                </div>
            </div>
        }

        {/* SOLO CHECKBOXES */}
        {
            onlyCheckboxes &&
            <div className="checkbox">
                <label style={labelStyles} className="label-checkbox">{ labelTitle }</label>
                <div className='option-box'>
                    {
                        options.map((option) => (
                            <label key={option} className="checkbox-label">
                                <span className="checkbox-text">{option}</span>
                                <input
                                    type={oneChoice ? 'radio' : 'checkbox'}
                                    name={nameProp}
                                    // checked={option === checkValue}
                                    value={option}
                                    checked={oneChoice ? (checkValue ? option === checkValue : selectedOption) : selectedOption.includes(option)}
                                    onChange={oneChoice ? (e) => onChange(e.target.value) : handleSelect}
                                    className="checkbox-input"
                                />
                            </label>
                        ))
                    }
                </div>
            </div>
        }
        </>
    );
};

export default Checkbox;