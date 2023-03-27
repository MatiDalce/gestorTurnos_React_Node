import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './editPatient.css';

const EditPatient = () => {

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [dni, setDni] = useState()
  const [socialNetwork, setSocialNetwork] = useState()
  const [age, setAge] = useState()
  const [genre, setGenre] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleLastName = (e) => {
    setLastName(e.target.value)
  };
  const handleDNI = (e) => {
    setDni(e.target.value)
  };
  const handleSocialNetwork = (e) => {
    setSocialNetwork(e.target.value)
  };
  const handleAge = (e) => {
    setAge(e.target.value)
  };
  const handleGenre = (e) => {
    setGenre(e.target.value)
  };

  return (
    <>
      <h2 className='editPatient-title'>EDICIÓN DE DATOS DEL PACIENTE</h2>
        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Input
              value={name}
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
          </div>
          <div className="input-editPatient-box">
            <Input
              value={lastName}
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
        </div>
        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Input
              value={dni}
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
          </div>
          <div className="input-editPatient-box">
            <Input
              value={socialNetwork}
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
        </div>
        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Input
              value={age}
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
          </div>
          <div className="input-editPatient-box">
            <Input
              value={genre}
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
      </div>
      <div className="btn-editPatient-center">
        <div className='btn-editPatient-container'>
          <Button 
            title={'Editar'} 
            type='button'
            width='20%'
            margin='5% 0'
          />
        </div>
      </div>
    </>
  )
}

export default EditPatient