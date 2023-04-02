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

  useEffect(() => {
    fetch(`${config.webAPI}/appointments`)
    .then(res => res.json())
    .then(res => {
      const modifiedRes = res.map(shift => {
        return {
          id: shift.id,
          completeName: `${shift.patient.name} ${shift.patient.lastName}`,
          day: shift.day,
          hour: shift.hour
        }
      })
      setShiftList(modifiedRes);
    });
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

  const handleShiftSearch = () => {
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
    });
  }

  return (
    <>
    <div className="search-shift">
      <div className="shiftList-input-box">
        <Input 
          onChange={handleName}
          value={filterShift.name}
          isSearcheable
          hasLabel
          labelTitle='Nombre'
          type='text'
          nameProp='search'
        />
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
          title={'Filtrar Turnos'} 
          type='button'
          onClick={handleShiftSearch}
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
      headers={['Nombre y Apellido', 'Fecha de turno', 'Horario del turno']} 
      contentDisplay={['id', 'completeName', 'day', 'hour']}
      content={shiftList} />
    </>
  )
}

export default ShiftList