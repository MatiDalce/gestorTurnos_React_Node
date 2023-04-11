import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import { config } from '../../env/config';
import './shiftList.css'

const ShiftList = () => {

  const [shiftList, setShiftList] = useState([]);
  const [filterShift, setFilterShift] = useState({
    name: '',
    dateFrom: '',
    dateUntil: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.webAPI}/appointments`)
    .then(res => res.json())
    .then(res => {
      if(res.length > 0) {
        const modifiedRes = res.map(shift => {
          return {
            id: shift.id,
            completeName: `${shift.patient.name} ${shift.patient.lastName}`,
            day: shift.day,
            hour: shift.hour
          }
        })
        setShiftList(modifiedRes);
      }
    })
    .finally(() => setLoading(false));
  }, [])

  const handleName = (e) => {
    setFilterShift({
      ...filterShift,
      name: e.target.value
    })
  }

  const handleDateFrom = (e) => {
    setFilterShift({
      ...filterShift,
      dateFrom: e.target.value
    })
  }

  const handleDateUntil = (e) => {
    setFilterShift({
      ...filterShift,
      dateUntil: e.target.value
    })
  }

  // Input de refresh
  const handleRefresh = (e) => {
    fetch(`${config.webAPI}/appointments`)
    .then(res => res.json())
    .then(res => {
      if(res) {
        setLoading(true)
        const modifiedRes = res.map(shift => {
          return {
            id: shift.id,
            completeName: `${shift.patient.name} ${shift.patient.lastName}`,
            day: shift.day,
            hour: shift.hour
          }
        })
        setShiftList(modifiedRes);
        setLoading(false)
      } else {
      }
    });
  }

  const handleShiftSearch = () => {
    console.log(`${config.webAPI}/appointments/search?q=${filterShift.name}`);
    setLoading(true)
    fetch(`${config.webAPI}/appointments/search?q=${filterShift.name}`)
    .then(res => res.json())
    .then(res => {
      if(!res.appointments) return
      const modifiedRes = res.appointments.map(shift => {
        return {
          id: shift.id,
          completeName: `${shift.patient.name} ${shift.patient.lastName}`,
          day: shift.day,
          hour: shift.hour
        }
      })
      setShiftList(modifiedRes);
      setLoading(false)
    });
  }

  return (
    <>
    <div className="search-shift">
      <div className="shiftList-input-btn-container">
        <div className="shiftList-input-box">
          <Input 
            onChange={handleName}
            value={filterShift.name}
            isSearcheable
            type='text'
            nameProp='search'
            placeholder={'Buscar por nombre'}
            isDisabled={loading}
          />
        </div>
        <div className="shiftList-btn-box-search">
          <Button 
            title={'Filtrar Turnos'} 
            type='button'
            onClick={handleShiftSearch}
            isDisabled={loading}
          />
        </div>
      </div>
      {/* <div className="shiftList-input-box">
        <Input 
          onChange={handleDateFrom}
          value={filterShift.dateFrom}
          hasLabel
          labelTitle='Fecha desde:'
          type='date'
          nameProp='fromDate'
        />
      </div>
      <div className="shiftList-input-box">
        <Input 
          onChange={handleDateUntil}
          value={filterShift.dateUntil}
          hasLabel
          labelTitle='Fecha hasta:'
          type='date'
          nameProp='untilDate'
        />
      </div> */}

      <div className="shiftList-btn-box">
        <Button 
          title={'Agregar Turno'} 
          type='button'
          path='/agregar-turno'
        />
      </div>
    </div>
    {
      shiftList.length > 0 ? <><Table 
        staticPath={'/turno'}
        headers={{completeName: 'Nombre y Apellido', day: 'Fecha de turno', hour: 'Horario del turno'}}
        content={shiftList} 
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
        <p className='noContent-text'>No hay turnos</p>
      </div>
    }
    
    </>
  )
}

export default ShiftList