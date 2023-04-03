import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Table from '../../components/Table/Table'
import { config } from '../../env/config';
import './shiftPatientList.css'

const ShiftPatientList = () => {

  const { id } = useParams()

  const [shiftPatientList, setShiftPatientList] = useState([]);

  const handleDateFrom = () => {}

  const handleDateUntil = () => {}

  const handleOrder = (e) => {
    if(e.target.value === 'recientes') {
      fetch(`${config.webAPI}/patients/patient-appointmentsDSC/${id}`)
      .then(res => res.json())
      .then(res => {
        setShiftPatientList(res)
      });
    } else if(e.target.value === 'antiguos') {
      fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
      .then(res => res.json())
      .then(res => {
        setShiftPatientList(res)
      });
    } else return;
  }

  useEffect(() => {
    fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      setShiftPatientList(res)
    });
  }, [id])

  return (
    <>
    <div className="search-patient-shifts">
      {/* <div className="shiftPatientList-input-box">
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
      </div> */}
      <div className="shiftPatientList-input-box">
        <Select
          onChange={handleOrder}
          options={[
            {
              text: 'Seleccione',
              value: ''
            },
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
      headers={{day: 'Fecha', hour: 'Hora'}}
      content={shiftPatientList || []} 
    />
  </>
  )
}

export default ShiftPatientList