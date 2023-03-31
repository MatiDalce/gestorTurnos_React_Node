import React from 'react';
import './accordion.css';

const Accordion = ({title, children}) => {
    return (
        <div class="accordion">
            <input type="checkbox" id="tab1" className='accordion-input' />
            <label class="accordion-label" for="tab1">{title}</label>
            <div class="accordion-content">
                {children}
            </div>
        </div>
    )
}

export default Accordion