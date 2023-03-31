import React, { useEffect, useState } from 'react';
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Table from '../../components/Table/Table'
import { config } from '../../env/config';
import './shiftPatientList.css'

const ShiftPatientList = () => {
  const [shiftPatientList, setShiftPatientList] = useState([]);

  const handleDateFrom = () => {}
  const handleDateUntil = () => {}
  const handleOrder = () => {}


  useEffect(() => {
    fetch(`${config.webAPI}/`)
    .then(res => res.json())
    .then(res => setShiftPatientList(res));
  }, [])

  return (
    <>
    <div className="search-patient-shifts">
      <div className="shiftPatientList-input-box">
        <Input 
          onChange={handleDateFrom}
          hasLabel
          labelTitle='Fecha desde:'
          type='date'
          nameProp='fromDate'
        />
      </div>
      <div className="shiftPatientList-input-box">
        <Input 
          onChange={handleDateUntil}
          hasLabel
          labelTitle='Fecha hasta:'
          type='date'
          nameProp='untilDate'
        />
      </div>
      <div className="shiftPatientList-input-box">
        <Select
          onChange={handleOrder}
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
        />
      </div>
    </div>
    <Table 
      staticPath={'/turno'}
      headers={['ID', 'N° de turno', 'Fecha', 'Estado']} 
      contentDisplay={['id', 'appointment', 'date', 'status']}
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