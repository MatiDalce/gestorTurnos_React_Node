import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { convertISOStringtoDateTime } from '../../assets/helpers/unixtimeToSomething';
import { config } from '../../env/config';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Select from '../../components/Select/Select';
import Table from '../../components/Table/Table';
import './shiftPatientList.css';

const ShiftPatientList = () => {

  const { id } = useParams()

  // ===== ESTADO =====
  const [shiftPatientList, setShiftPatientList] = useState([]);
  const [patientCompleteName, setPatientCompleteName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ===== GET DEL PACIENTE =====
    fetch(`${config.webAPI}/patients/${id}`)
    .then(res => res.json())
    .then(res => {
      if(!res.errors) {
        // SETEO DE ESTADO
        setPatientCompleteName(`${res.name} ${res.lastName}`)
        setLoading(false)
      } else {
        setLoading(false)
      }
    })
  }, [id])

  // ===== GET DE LOS TURNOS DEL PACIENTE =====
  useEffect(() => {
    fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
    .then(res => res.json())
    .then(res => {
      if(res.length > 0) {
        const modifiedRes = res.map(shift => {
          return {
            id: shift.id,
            patientId: shift.patientId,
            day: convertISOStringtoDateTime(shift.day, 'date'),
            hour: convertISOStringtoDateTime(shift.day, 'hour') + ' hs',
            payStatus: shift.payStatus,
            amountToPay: '$ ' + shift.amountToPay,
            note: shift.note
          }
        })
        setShiftPatientList(modifiedRes)
      }
    })
    .finally(() => setLoading(false));
  }, [id])

  // ===== ORDEN DE TURNOS DESDE RECIENTES O ANTIGUOS =====
  const handleOrder = (e) => {
    setLoading(true)
    if(e.target.value === 'recientes') {
      fetch(`${config.webAPI}/patients/patient-appointmentsDSC/${id}`)
      .then(res => res.json())
      .then(res => {
        if(res.length > 0) {
          const modifiedRes = res.map(shift => {
            return {
              id: shift.id,
              patientId: shift.patientId,
              day: convertISOStringtoDateTime(shift.day, 'date'),
              hour: convertISOStringtoDateTime(shift.day, 'hour') + ' hs',
              payStatus: shift.payStatus,
              amountToPay: shift.amountToPay,
              note: shift.note
            }
          })
          setShiftPatientList(modifiedRes)
        }
      })
      .finally(() => setLoading(false));
    } else {
      fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
      .then(res => res.json())
      .then(res => {
        if(res.length > 0) {
          const modifiedRes = res.map(shift => {
            return {
              id: shift.id,
              patientId: shift.patientId,
              day: convertISOStringtoDateTime(shift.day, 'date'),
              hour: convertISOStringtoDateTime(shift.day, 'hour') + ' hs',
              payStatus: shift.payStatus,
              amountToPay: shift.amountToPay,
              note: shift.note
            }
          })
          setShiftPatientList(modifiedRes)
        }
      })
      .finally(() => setLoading(false));
    }
  }

    // Botón de refresh
    const handleRefresh = (e) => {
      setLoading(true)
      fetch(`${config.webAPI}/patients/patient-appointments/${id}`)
      .then(res => res.json())
      .then(res => {
        if(res.length > 0) {
          const modifiedRes = res.map(shift => {
            return {
              id: shift.id,
              patientId: shift.patientId,
              day: convertISOStringtoDateTime(shift.day, 'date'),
              hour: convertISOStringtoDateTime(shift.day, 'hour') + ' hs',
              payStatus: shift.payStatus,
              amountToPay: shift.amountToPay,
              note: shift.note
            }
          })
          setShiftPatientList(modifiedRes)
        }
      })
      .finally(() => setLoading(false));
    }

  // ===== HTML =====
  return (
    <>
    <Title title={patientCompleteName} margin={'0 0 2% 0'} />
    <div className="search-patient-shifts">
      <div className="shiftPatientList-input-box">
        <Select
          onChange={handleOrder}
          isDisabled={loading || shiftPatientList.length === 0}
          options={[
            {
              text: 'Seleccione',
              value: null
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
      headers={{day: 'Fecha', hour: 'Hora', payStatus: "Estado", amountToPay: "Monto"}}
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