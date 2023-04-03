import React, { useState } from 'react'
import Table from '../Table/Table'
import Title from '../Title/Title'
import CrossIcon from '../../assets/icons/xmark-solid.svg'
import './modal.css'

// INFO DEL CALENDARIO
// EVENT CLICK - https://fullcalendar.io/docs/eventClick
// EVENT DATA - https://fullcalendar.io/docs/v3/event-data

const Modal = ({ title, description, setter }) => {

    const closeModal = () => {
        // setter: Función que viene del padre y abre o cierra el modal
        setter()
    }

    return (
        <div className={`modal-center`} >
            <div className="modal-container">
                <div className='divCloseModal' onClick={closeModal}>
                    <img className='closeModal' src={CrossIcon} alt='Cerrar' />
                </div>
                <Title 
                    title={ title }
                    isBold
                    textColor='var(--white-bg)'
                />
                <p className='appointment'>{description || ''}</p>
                {/* <Table 
                    headers={{id: 'ID', completeName: 'Nombre y Apellido', hour: 'Hora'}}
                    content={[
                        {
                            id: 1,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 2,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 3,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 4,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 5,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 6,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 1,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 2,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 3,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 4,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 5,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                        {
                            id: 6,
                            name: 'Diego Perez',
                            time: '13:30hs'
                        },
                    ]}
                /> */}
            </div>
        </div>
    )
}

export default Modal