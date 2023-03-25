import React from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import './shiftList.css'

const ShiftList = () => {
  return (
    <>
    <div className="search-shift">
        <Input 
          isSearcheable
          hasLabel
          labelTitle='Nombre'
          type='text'
          nameProp='search'
          inputWidth='16%'
          margin='0 4% 0 0'
        />
        <Input 
          hasLabel
          labelTitle='Fecha desde:'
          type='date'
          nameProp='fromDate'
          inputWidth='16%'
          margin='0 4% 0 0'
        />
        <Input 
          hasLabel
          labelTitle='Fecha hasta:'
          type='date'
          nameProp='untilDate'
          inputWidth='16%'
          margin='0 4% 0 0'
        />
      <Button 
        title={'Agregar Turno'} 
        type='button'
        width='30%'
        path='/agregar-turno'
      />
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