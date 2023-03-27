import React from 'react'
import Table from '../Table/Table'
import Title from '../Title/Title'
import CrossIcon from '../../assets/icons/xmark-solid.svg'
import './modal.css'

const Modal = () => {

    const closeModal = () => {
        console.log('Cerrar modal');
    }

    return (
        <div className="modal-container">
            <div className='divCloseModal' onClick={closeModal}>
                <img className='closeModal' src={CrossIcon} alt='Cerrar' />
            </div>
            <Title 
                title='Fecha: 03/06' 
                isBold
                textColor='var(--white-bg)'
            />
            <Table 
                headerBg='var(--skyblue-bg)'
                headers={['ID','Nombre y Apellido', 'Hora']}
                contentDisplay={['id', 'name', 'time']}
                noClickable
                noSticky
                noCursor
                tableWidth={'100%'}
                textColor='var(--white-bg)'
                noTableBorders
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
            />
        </div>
    )
}

export default Modal