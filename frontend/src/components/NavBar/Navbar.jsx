import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { CurrentPage } from '../../assets/helpers/CurrentPage';
import userLogo from '../../assets/icons/circle-user-solid.svg'
import eyeLogo from '../../assets/icons/eye-solid.svg'
import blindEyeLogo from '../../assets/icons/eye-slash-solid.svg'
import homeLogo from '../../assets/icons/house-solid.svg'
import ArrowLogo from '../../assets/icons/arrow-left-solid.svg'
import './navbar.css'
import Swal from 'sweetalert2';

const Navbar = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let { id } = useParams();
    const [watch, setWatch] = useState(false);

    const handleWatch = () => {
        setWatch(!watch)
    }

    const handleSession = () => {
        return Swal.fire({
            title: 'Está a punto de cerrar sesión',
            text: '¿Está seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'var(--skyblue-bg)',
            cancelButtonColor: 'var(--red-bg)',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('auth')
                navigate('/login') 
            } else {
                return;
            }
        })
    }

    return (
        <>
            {/* NAVBAR */}
            {
                watch && <div className='black-screen'>
                    <button className="navbar-home-container" onClick={handleWatch}>
                        <img src={ eyeLogo } alt="Volver a ver" className="navbar-icon-item navbar-black-screen-icon" />
                    </button>
                </div>
            }
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
                        <button className="navbar-home-container" onClick={handleWatch}>
                            <img src={ blindEyeLogo } alt="Volver a ver" className={`navbar-icon-item ${watch && 'navbar-icon-hide'}`} />
                        </button>
                        <button className="navbar-home-container" onClick={handleSession}>
                            <img src={ userLogo } alt="Cerrar sesión" className="navbar-icon-item" />
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