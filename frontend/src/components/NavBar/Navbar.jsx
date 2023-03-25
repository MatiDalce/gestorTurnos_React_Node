import React from 'react'
import './navbar.css'
import {CurrentPage} from '../../assets/helpers/CurrentPage';
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
                    <button>
                        
                    </button>
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