import React from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Table from '../../components/Table/Table'
import './shiftPatientList.css'

const ShiftPatientList = () => {
  return (
    <>
    <div className="search-patient-shifts">
        <Input 
          hasLabel
          labelTitle='Fecha desde:'
          type='date'
          nameProp='fromDate'
          inputWidth='30%'
          margin='0 4% 0 0'
        />
        <Input 
          hasLabel
          labelTitle='Fecha hasta:'
          type='date'
          nameProp='untilDate'
          inputWidth='30%'
          margin='0 4% 0 0'
        />
        <Select
          options={[
            {
              text: 'De más antiguos a más recientes',
              value: 'antiguos'
            },
            {
              text: 'De más recientes a más antiguos',
              value: 'recientes'
            },
          ]}
          hasLabel
          labelTitle='Ordenar por:'
          nameProp='untilDate'
          inputWidth='30%'
          margin='0 4% 0 0'
        />
    </div>
    <Table headers={['N° de turno', 'Fecha', 'Estado']} content={[
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente',
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente',
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado',
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
      ]} 
    />
  </>
  )
}

export default ShiftPatientList