import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from '../../assets/helpers/toast'
import { config } from '../../env/config';
import { CurrentPage } from '../../assets/helpers/CurrentPage';
import ArrowLogo from '../../assets/icons/arrow-left-solid.svg';
import eyeLogo from '../../assets/icons/eye-solid.svg';
import './navbar.css';

const Navbar = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let { id } = useParams();
    
    const [watch, setWatch] = useState(false);

    // Ocultar toda la pantalla
    const handleWatch = () => {
        setWatch(!watch)
    }

    // Ocultar toda la pantalla
    const handleDownloadAppointments = () => {
        fetch(`${config.webAPI}/appointments/download`)
        .then(response => {
            if (!response.ok) {
                toast('error', 'Ha ocurrido un error en la descarga')
                throw new Error('Falló la descarga');
            }
            return response.blob();
        })
        .then(blob => {
            if(blob) {
                const file = new File([blob], 'archivo.zip', { type: 'application/zip' })
                // Create a URL for the Blob object
                const url = URL.createObjectURL(file);
                // Create a link element and click it to download the file
                const link = document.createElement('a');
                link.href = url;
                link.download = `Todos_los_turnos.zip`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                toast('success', 'Documento descargado exitosamente');
            } else {
                toast('error', 'Ha ocurrido un error en la descarga')
            }
        })
    }

    // Cerrar sesión
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
                <nav className='navbar' role="navigation">
                    <button className="navbar-arrow-container" onClick={() => navigate(-1)}>
                        <img src={ ArrowLogo } alt="Ir hacia atrás" className="navbar-arrow" />
                    </button>
                    <div className="navbar-title-container">
                        <h1 className="navbar-title">{<CurrentPage pathname={location.pathname} id={id} />}</h1>
                    </div>

                    <div className="hamburguer-container">
                        <div className="hamburger-menu">
                            <input id="menu__toggle" type="checkbox" />
                            <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                            </label>

                            <ul className="menu__box">
                                <li className="menu__item" onClick={() => navigate('/')}>Inicio</li>
                                <li className="menu__item" onClick={handleWatch}>Modo oculto</li>
                                <li className="menu__item" onClick={handleDownloadAppointments}>Descargar los turnos</li>
                                <li className="menu__item" onClick={handleSession}>Cerrar sesión</li>
                            </ul>
                        </div>
                    </div>

                </nav>
            }
            {/* PÁGINAS */}
            <main>
                <Outlet />
            </main>

        </>
    )
}

export default Navbar