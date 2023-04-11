import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select'
import Table from '../../components/Table/Table'
import { config } from '../../env/config';
import './shiftPatientList.css'

const ShiftPatientList = () => {

  const { id } = useParams()

  const [shiftPatientList, setShiftPatientList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.length > 0) {
        setShiftPatientList(res)
      }
    })
    .finally(() => setLoading(false));
  }, [id])

  const handleDateFrom = () => {}

  const handleDateUntil = () => {}

  const handleOrder = (e) => {
    setLoading(true)
    if(e.target.value === 'recientes') {
      fetch(`${config.webAPI}/patients/patient-appointmentsDSC/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.length > 0) {
          setShiftPatientList(res)
        }
      })
      .finally(() => setLoading(false));
    } else if(e.target.value === 'antiguos') {
      fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.length > 0) {
          setShiftPatientList(res)
        }
      })
      .finally(() => setLoading(false));
    } else return setLoading(false);
  }

    // Input de refresh
    const handleRefresh = (e) => {
      setLoading(true)
      fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
      .then(res => res.json())
      .then(res => {
        setShiftPatientList(res)
        setLoading(false)
      });
    }

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
          isDisabled={loading}
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
    {
      shiftPatientList.length > 0 ? <><Table 
      staticPath={'/turno'}
      headers={{day: 'Fecha', hour: 'Hora'}}
      content={shiftPatientList || []} 
    />
      <div className="addPatient-refresh-center">
        <div className="patientList-refresh-btn">
          <Button 
            title={'Refrescar'}
            type='button'
            onClick={handleRefresh}
            bgColor='var(--green-bg)'
            isDisabled={loading}
          />
        </div>
      </div>
    </>
    :
    <div style={{display:'flex', justifyContent: 'center', marginTop: '5%'}}>
      <p className='noContent-text'>Este paciente no tiene turnos</p>
    </div>
    }
    
  </>
  )
}

export default ShiftPatientList