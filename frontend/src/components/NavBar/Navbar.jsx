import React from 'react'
import './navbar.css'
import {CurrentPage} from '../../assets/helpers/CurrentPage';
import ArrowLogo from '../../assets/icons/arrow-left-solid.svg'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({title}) => {
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <>
            {/* NAVBAR */}
            {
                (location.pathname !== '/login' && location.pathname !== '/') &&
                <div className='navbar'>
                    <button className="navbar-arrow-container" onClick={() => navigate(-1)}>
                        <img src={ ArrowLogo } alt="Ir hacia atrás" className="navbar-arrow" />
                    </button>
                    <div className="navbar-title-container">
                        <h1 className="navbar-title">{<CurrentPage pathname={location.pathname} />}</h1>
                    </div>
                </div>
            }
            {/* PÁGINAS */}
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Navbar