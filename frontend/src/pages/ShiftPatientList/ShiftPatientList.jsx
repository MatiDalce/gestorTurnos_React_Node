import React from 'react';
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
    <Table 
      staticPath={'/turno'}
      headers={['ID', 'N° de turno', 'Fecha', 'Estado']} 
      content={[
        {
          id: 1,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente',
        },
        {
          id: 2,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 3,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 4,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 5,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 6,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 7,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente',
        },
        {
          id: 8,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 9,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Pendiente'
        },
        {
          id: 10,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 11,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 12,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 1,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 13,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 14,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado',
        },
        {
          id: 15,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 16,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 17,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 18,
          shiftNumber: '128523532',
          date: '13/06/2023',
          state: 'Realizado'
        },
        {
          id: 19,
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