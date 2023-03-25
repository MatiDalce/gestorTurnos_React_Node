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
      />
    </div>
    <Table headers={['Nombre y Apellido', 'Fecha de turno', 'Horario del turno']} content={[
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs',
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs',
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs',
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
  {
    name: 'Diego Perez',
    date: '13/06/2023',
    time: '19:35hs'
  },
]} />
  </>
  )
}

export default ShiftList