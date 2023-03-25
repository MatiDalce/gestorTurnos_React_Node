import React from 'react'
import './navbar.css'
import ArrowLogo from '../../assets/icons/arrow-left-solid.svg'
import { Outlet, useNavigate } from 'react-router-dom';

const Navbar = ({title}) => {
    let navigate = useNavigate();

    return (
        <>
            {/* NAVBAR */}
            <div className='navbar'>
                <button className="navbar-arrow-container" onClick={() => navigate(-1)}>
                    <img src={ ArrowLogo } alt="Ir hacia atrás" className="navbar-arrow" />
                </button>
                <div className="navbar-title-container">
                    <h1 className="navbar-title">{title}</h1>
                </div>
            </div>

            {/* PÁGINAS */}
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navbar