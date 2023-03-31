import React from 'react'
import './navbar.css'
import {CurrentPage} from '../../assets/helpers/CurrentPage';
import userLogo from '../../assets/icons/circle-user-solid.svg'
import eyeLogo from '../../assets/icons/eye-solid.svg'
import blindEyeLogo from '../../assets/icons/eye-slash-solid.svg'
import homeLogo from '../../assets/icons/house-solid.svg'
import ArrowLogo from '../../assets/icons/arrow-left-solid.svg'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const Navbar = ({title}) => {
    let navigate = useNavigate();
    let location = useLocation();
    let { id } = useParams();

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
                        <h1 className="navbar-title">{<CurrentPage pathname={location.pathname} id={id} />}</h1>
                    </div>
                    <div className="navbar-icon-group">
                        <button className="navbar-home-container" onClick={() => navigate('/')}>
                            <img src={ homeLogo } alt="Ir a la Home" className="navbar-icon-item" />
                        </button>
                        <button className="navbar-home-container" onClick={() => navigate('/')}>
                            <img src={ eyeLogo } alt="Ir a la Home" className="navbar-icon-item" />
                        </button>
                        <button className="navbar-home-container" onClick={() => navigate('/')}>
                            <img src={ userLogo } alt="Ir a la Home" className="navbar-icon-item" />
                        </button>
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