import React, { useState, useEffect } from 'react'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './patientList.css'
import { config } from '../../env/config'

const PatientList = () => {

  const [search, setSearch] = useState('');
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Listado de pacientes
    fetch(`${config.webAPI}/patients/limit`)
    .then(res => res.json())
    .then(res => {
      setPatients(res)
    });
  }, [])

  // Filtro de pacientes
  const handleFilterPatients = (e) => {
    fetch(`${config.webAPI}/patients/search?q=${search}`)
    .then(res => res.json())
    .then(res => {
      if(res.patientsWithCompleteName.length === 0) return
      setPatients(res.patientsWithCompleteName)
    });
  }

  // Input de búsqueda
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="search-patient">
        <div className="patientList-input">
          <Input
            value={search}
            onChange={handleSearch}
            isSearcheable
            type='text'
            nameProp='search'
            placeholder='Buscar por nombre, apellido o DNI'
          />
        </div>
        <div className="patientList-btn">
          <Button 
            title={'Filtrar pacientes'} 
            type='button'
            onClick={handleFilterPatients}
          />
        </div>
        <div className="patientList-btn">
          <Button 
            title={'Agregar Paciente'}
            type='button'
            path='/agregar-paciente'
          />
        </div>
      </div>
      <Table 
        staticPath={'/paciente'} // Parte de la ruta a la que va a redirigir al hacer click en la celda
        headers={['Nombre y Apellido', 'DNI', 'E-mail']} // Cabeceras
        contentDisplay={['id', 'completeName', 'dni', 'email']} // Con esto se filtra la data que se requiere en las celdas
        content={patients || []} // Celdas
        />
    </>
  )
}

export default PatientList