import React from 'react'
import Table from '../../components/Table/Table'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import './patientList.css'

const PatientList = () => {

  return (
    <>
      <div className="search-patient">
          <Input 
            isSearcheable
            type='text'
            nameProp='search'
            placeholder='Buscar'
            inputWidth='60%'
            margin='0 4% 0 0'
          />
        <Button 
          title={'Agregar Paciente'} 
          type='button'
          width='30%'
        />
      </div>
      <Table headers={['Nombre', 'DNI', 'Email']} content={[
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com',
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com',
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com',
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
    {
      name: 'Diego Perez',
      dni: '2325235',
      email: 'diegop@email.com'
    },
  ]} />
    </>
  )
}

export default PatientList