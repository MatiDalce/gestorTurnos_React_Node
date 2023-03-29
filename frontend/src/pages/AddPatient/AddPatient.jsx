import React from 'react';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import './addPatient.css';

const AddPatient = () => {

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [dni, setDni] = useState();
  const [socialNetwork, setSocialNetwork] = useState();
  const [age, setAge] = useState();
  const [genre, setGenre] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [birthday, setBirthday] = useState();
  const [familyMembers, setFamilyMembers] = useState();
  const [parents, setParents] = useState();
  const [children, setChildren] = useState();
  const [siblings, setSiblings] = useState();
  const [livingSiblings, setLivingSiblings] = useState();
  const [personalPhone, setPersonalPhone] = useState();
  const [contactPhone, setContactPhone] = useState();
  const [chronicDisease, setChronicDisease] = useState();
  const [hasAllergies, setHasAllergies] = useState();
  const [bloodType, setBloodType] = useState();
  const [medication, setMedication] = useState();
  
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
  const handleMaritalStatus = (e) => {
    setMaritalStatus(e.target.value)
  }
  const handleBirthday = (e) => {
    setBirthday(e.target.value)
  }
  const handleFamilyMembers = (e) => {
    setFamilyMembers(e.target.value)
  }
  const handleParents = (e) => {
    setParents(e.target.value)
  }
  const handleChildren = (e) => {
    setChildren(e.target.value)
  }
  const handleSiblings = (e) => {
    setSiblings(e.target.value)
  }
  const handleLivingSiblings = (e) => {
    setLivingSiblings(e.target.value)
  }
  const handlePersonalPhone = (e) => {
    setPersonalPhone(e.target.value)
  }
  const handleContactPhone = (e) => {
    setContactPhone(e.target.value)
  }
  const handleChronicDisease = (e) => {
    setChronicDisease(e.target.value)
  }
  const handleHasAllergies = (e) => {
    setHasAllergies(e.target.value)
  }
  const handleBloodType = (e) => {
    setBloodType(e.target.value)
  }
  const handleMedication = (e) => {
    setMedication(e.target.value)
  }

  return (
    <>
        <Title title='DATOS DEL PACIENTE' />
        <div className="input-row">
          <div className="addPatient-box">
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
          <div className="addPatient-box">
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
        <div className="input-row">
          <div className="addPatient-box">
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
          <div className="addPatient-box">
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
        <div className="input-row">
          <div className="addPatient-box">
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
          <div className="addPatient-box">
            <Select
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
      <div className="input-row">
          <div className="addPatient-box">
            <Select
              value={maritalStatus}
              onChange={handleMaritalStatus}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Estado civil'
              isLabelCenter
              type='text'
              nameProp='maritalStatus'
              inputWidth='30%'
            />
          </div>
          <div className="addPatient-box">
            <Input
              value={birthday}
              onChange={handleBirthday}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Fecha de nacimiento'
              isLabelCenter
              placeholder='Ingrese la fecha de nacimiento'
              type='text'
              nameProp='birthday'
              inputWidth='30%'
            />
          </div>
      </div>
      <div className="input-row">
          <div className="addPatient-box">
            <Select
              value={familyMembers}
              onChange={handleFamilyMembers}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Miembros de la familia'
              isLabelCenter
              type='text'
              nameProp='familyMembers'
              inputWidth='30%'
            />
          </div>
          <div className="addPatient-box">
            <Input
              value={parents}
              onChange={handleParents}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Padres'
              isLabelCenter
              placeholder='Ingrese el nombre de los padres'
              type='text'
              nameProp='parents'
              inputWidth='30%'
            />
          </div>
      </div>
      <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={children}
              onChange={handleChildren}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Hijos'
              isLabelCenter
              placeholder='Ingrese el nombre de los hijos'
              type='text'
              nameProp='children'
              inputWidth='30%'
            />
          </div>
          <div className="addPatient-box">
            <Input
              value={siblings}
              onChange={handleSiblings}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Hermanos'
              isLabelCenter
              placeholder='Ingrese el nombre de los hermanos'
              type='text'
              nameProp='siblings'
              inputWidth='30%'
            />
          </div>
      </div>
      <div className="input-row">
        <div className="addPatient-box">
          <Select
            value={livingSiblings}
            onChange={handleLivingSiblings}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='¿Viven sus hermanos?'
            isLabelCenter
            placeholder='Ingrese la edad'
            type='text'
            nameProp='livingSiblings'
            inputWidth='30%'
          />
        </div>
      </div>
      <div className="input-row">
        <div className="addPatient-box">
          <Input
            value={personalPhone}
            onChange={handlePersonalPhone}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Teléfono personal'
            isLabelCenter
            placeholder='Ingrese el teléfono personal'
            type='text'
            nameProp='personalPhone'
            inputWidth='30%'
          />
        </div>
        <div className="addPatient-box">
          <Input
            value={contactPhone}
            onChange={handleContactPhone}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Teléfono de contacto'
            isLabelCenter
            placeholder='Ingrese el teléfono de contacto'
            type='text'
            nameProp='contactPhone'
            inputWidth='30%'
          />
        </div>
      </div>
      <div className="input-row">
          <div className="addPatient-box">
            <Select
              value={hasAllergies}
              onChange={handleHasAllergies}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Tiene alguna alergia?'
              isLabelCenter
              type='text'
              nameProp='hasAllergies'
              inputWidth='30%'
            />
          </div>
          <div className="addPatient-box">
            <Select
              value={chronicDisease}
              onChange={handleChronicDisease}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Tiene alguna enfermedad crónica?'
              isLabelCenter
              type='text'
              nameProp='chronicDisease'
              inputWidth='30%'
            />
          </div>
      </div>
      <div className="input-row">
          <div className="addPatient-box">
            <Select
              value={bloodType}
              onChange={handleBloodType}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Grupo sanguíneo'
              isLabelCenter
              placeholder='Ingrese el grupo sanguíneo'
              type='text'
              nameProp='bloodType'
              inputWidth='30%'
            />
          </div>
          <div className="addPatient-box">
            <Select
              value={medication}
              onChange={handleMedication}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Toma algún medicamento?'
              isLabelCenter
              type='text'
              nameProp='medication'
              inputWidth='30%'
            />
          </div>
      </div>

      <div className="btn-addPatient-center">
        <div className='btn-addPatient-container'>
          <Button 
            title={'Registrar'} 
            type='button'
            width='20%'
            margin='5% 0'
          />
        </div>
      </div>
    </>
  )
}

export default AddPatient