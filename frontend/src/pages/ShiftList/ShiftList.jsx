import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Table from '../../components/Table/Table'
import { config } from '../../env/config';
import './shiftList.css'

const ShiftList = () => {

  const handleName = () => {}
  const handleDateFrom = () => {}
  const handleDateUntil = () => {}

  const [shiftList, setShiftList] = useState([]);

  // FILTRO: name|lastName|dni `${config.webAPI}/appointments/search?`
  // Ejemplo - http://localhost:3001/appointments/search?q=J (J de juan)

  useEffect(() => {
    fetch(`${config.webAPI}/appointments`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setShiftList(res)
    });
  }, [])

  return (
    <>
    <div className="search-shift">
      <div className="shiftList-input-box">
        <Input 
          onChange={handleName}
          isSearcheable
          hasLabel
          labelTitle='Nombre'
          type='text'
          nameProp='search'
        />
      </div>
      <div className="shiftList-input-box">
        <Input 
          onChange={handleDateFrom}
          hasLabel
          labelTitle='Fecha desde:'
          type='date'
          nameProp='fromDate'
        />
      </div>
      <div className="shiftList-input-box">
        <Input 
          onChange={handleDateUntil}
          hasLabel
          labelTitle='Fecha hasta:'
          type='date'
          nameProp='untilDate'
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
      headers={['ID','Nombre y Apellido', 'Fecha de turno', 'Horario del turno']} 
      contentDisplay={['id', 'name', 'day', 'hour']}
      content={shiftList} />
    </>
  )
}

export default ShiftList