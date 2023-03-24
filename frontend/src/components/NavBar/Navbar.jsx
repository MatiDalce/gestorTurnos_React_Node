import React from 'react'
import './navbar.css'
import ArrowLogo from '../../assets/icons/arrow-left-solid.svg'

const Navbar = ({title}) => {
    return (
        <div className='navbar'>
            <button className="navbar-arrow-container">
                <img src={ ArrowLogo } alt="Ir hacia atrás" className="navbar-arrow" />
            </button>
            <div className="navbar-title-container">
                <h1 className="navbar-title">{title}</h1>
            </div>
        </div>
    )
}

export default Navbar