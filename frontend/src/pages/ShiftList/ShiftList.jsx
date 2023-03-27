import React from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import './shiftList.css'

const ShiftList = () => {

  const handleName = () => {}
  const handleDateFrom = () => {}
  const handleDateUntil = () => {}

  return (
    <>
    <div className="search-shift">
      <div className="shiftList-input-box">
        <Input 
          onChange={handleName}
          isSearcheable
          hasLabel
          labelTitle='Nombre'
          type='text'
          nameProp='search'
        />
      </div>
      <div className="shiftList-input-box">
        <Input 
          onChange={handleDateFrom}
          hasLabel
          labelTitle='Fecha desde:'
          type='date'
          nameProp='fromDate'
        />
      </div>
      <div className="shiftList-input-box">
        <Input 
          onChange={handleDateUntil}
          hasLabel
          labelTitle='Fecha hasta:'
          type='date'
          nameProp='untilDate'
        />
      </div>
      <div className="shiftList-btn-box">
        <Button 
          title={'Agregar Turno'} 
          type='button'
          path='/agregar-turno'
        />
      </div>
    </div>
    <Table 
      staticPath={'/turno'}
      headers={['ID','Nombre y Apellido', 'Fecha de turno', 'Horario del turno']} 
      content={[
        {
          id: 1,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs',
        },
        {
          id: 2,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 3,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 4,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 5,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 6,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 7,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs',
        },
        {
          id: 8,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 9,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 10,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 11,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 12,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 13,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 14,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 15,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs',
        },
        {
          id: 16,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 17,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 18,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 19,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
        {
          id: 20,
          name: 'Diego Perez',
          date: '13/06/2023',
          time: '19:35hs'
        },
      ]} />
    </>
  )
}

export default ShiftList