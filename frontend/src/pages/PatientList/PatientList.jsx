import React from 'react'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './patientList.css'

const PatientList = () => {

  const handleSearch = () => {}

  return (
    <>
      <div className="search-patient">
        <div className="patientList-input">
          <Input 
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
        staticPath={'/paciente'}
        headers={['ID','Nombre', 'DNI', 'Email']} 
        content={[
          {
            id: 1,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com',
          },
          {
            id: 2,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 3,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 4,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 5,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 6,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 7,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com',
          },
          {
            id: 8,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 9,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 10,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 11,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 12,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 13,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 14,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 15,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com',
          },
          {
            id: 16,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 17,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 18,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 19,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
          {
            id: 20,
            name: 'Diego Perez',
            dni: '2325235',
            email: 'diegop@email.com'
          },
        ]} 
        />
    </>
  )
}

export default PatientList