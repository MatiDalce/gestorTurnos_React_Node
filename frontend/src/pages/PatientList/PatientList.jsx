import React, { useState, useEffect } from 'react'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './patientList.css'

const PatientList = () => {

  const [search, setSearch] = useState();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/patients')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setPatients(res)
    });
  }, [])

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
            placeholder='Buscar'
            inputWidth='60%'
            margin='0 4% 0 0'
          />
        </div>
        <div className="patientList-btn">
          <Button 
            title={'Agregar Paciente'} 
            type='button'
            width='30%'
            path='/agregar-paciente'
          />
        </div>
      </div>
      <Table 
        staticPath={'/paciente'} // Parte de la ruta a la que va a redirigir al hacer click en la celda
        headers={['ID','Nombre', 'DNI']} // Cabeceras
        contentDisplay={['id', 'name', 'dni']} // Con esto se filtra la data que se requiere en las celdas
        content={patients} // Celdas
        />
    </>
  )
}

export default PatientList