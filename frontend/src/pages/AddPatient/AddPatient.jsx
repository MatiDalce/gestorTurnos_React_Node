import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './addPatient.css';

const AddPatient = () => {
  
  const handleName = () => {};
  const handleLastName = () => {};
  const handleDNI = () => {};
  const handleSocialNetwork = () => {};
  const handleAge = () => {};
  const handleGenre = () => {};

  return (
    <>
        <div className="input-row">
          <Input
            onChange={handleName}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Nombre del paciente'
            isLabelCenter
            placeholder='Ingrese el nombre'
            type='text'
            nameProp='name'
            inputWidth='30%'
          />
          <Input
            onChange={handleLastName}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Apellido del paciente'
            isLabelCenter
            placeholder='Ingrese el apellido'
            type='text'
            nameProp='lastname'
            inputWidth='30%'
          />
        </div>
        <div className="input-row">
          <Input
            onChange={handleDNI}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='DNI del paciente'
            isLabelCenter
            placeholder='Ingrese el DNI'
            type='text'
            nameProp='dni'
            inputWidth='30%'
          />
          <Input
            onChange={handleSocialNetwork}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Obra Social del paciente'
            isLabelCenter
            placeholder='Ingrese la obra social'
            type='text'
            nameProp='social-work'
            inputWidth='30%'
          />
        </div>
        <div className="input-row">
          <Input
            onChange={handleAge}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Edad'
            isLabelCenter
            placeholder='Ingrese la edad'
            type='text'
            nameProp='age'
            inputWidth='30%'
          />
          <Input
            onChange={handleGenre}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Género'
            isLabelCenter
            placeholder='Ingrese el género'
            type='text'
            nameProp='genre'
            inputWidth='30%'
          />
      </div>
      <div className='btn-addPatient-container'>
        <Button 
          title={'Registrar'} 
          type='button'
          width='20%'
          margin='5% 0'
        />
      </div>
    </>
  )
}

export default AddPatient