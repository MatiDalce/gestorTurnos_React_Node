import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import './editPatient.css';

const EditPatient = () => {

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [dni, setDni] = useState()
  const [socialNetwork, setSocialNetwork] = useState()
  const [age, setAge] = useState()
  const [genre, setGenre] = useState()
  const [maritalStatus, setMaritalStatus] = useState();
  const [birthday, setBirthday] = useState();
  const [father, setFather] = useState();
  const [mother, setMother] = useState();
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
  // const handleFamilyMembers = (e) => {
  //   setFamilyMembers(e.target.value)
  // }
  const handleFather = (e) => {
    setFather(e.target.value)
  }
  const handleMother = (e) => {
    setMother(e.target.value)
  }
  const handleChildren = (e) => {
    setChildren(e.target.value)
  }
  const handleSiblings = (e) => {
    setSiblings(e.target.value)
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
              nameProp='name'
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
              nameProp='lastname'
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
              nameProp='dni'
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
              nameProp='social-work'
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
              type={'number'}
              labelTitle='Edad'
              isLabelCenter
              placeholder='Ingrese la edad'
              nameProp='age'
            />
          </div>
          <div className="input-editPatient-box">
            <Checkbox
              hasLabel
              labelTitle='Género'
              options={['Masculino', 'Femenino', 'Otro']}
              oneChoice
              onlyCheckboxes
              colorLabel='var(--black-bg)'
              isLabelCenter
              nameProp='genre'
              value={genre}
              onChange={handleGenre}
            />
          </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <Input
            value={birthday}
            onChange={handleBirthday}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Fecha de nacimiento'
            isLabelCenter
            placeholder='Ingrese la fecha de nacimiento'
            nameProp='birthday'
          />
        </div>
        <div className="input-editPatient-box">
          <Checkbox
            options={['Casado', 'Soltero', 'Divorciado', 'Viudo']}
            onlyCheckboxes
            oneChoice
            onChange={handleMaritalStatus}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Estado civil'
            isLabelCenter
            nameProp='maritalStatus'
          />
        </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <Input
            value={personalPhone}
            onChange={handlePersonalPhone}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Teléfono personal'
            isLabelCenter
            placeholder='Ingrese el teléfono personal'
            nameProp='personalPhone'
          />
        </div>
        <div className="input-editPatient-box">
          <Input
            value={contactPhone}
            onChange={handleContactPhone}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Teléfono de contacto'
            isLabelCenter
            placeholder='Ingrese el teléfono de contacto'
            nameProp='contactPhone'
          />
        </div>
      </div>
      <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Checkbox
              withText={'¿Vive?'}
              oneChoice
              value={father}
              onChange={handleFather}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Padre'
              isLabelCenter
              placeholder='Ingrese el nombre del padre'
              nameProp='father'
              options={['Sí', 'No']}
            />
          </div>
          <div className="input-editPatient-box">
            <Checkbox
              withText={'¿Vive?'}
              oneChoice
              value={mother}
              onChange={handleMother}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Madre'
              isLabelCenter
              placeholder='Ingrese el nombre de la madre'
              nameProp='mother'
              options={['Sí', 'No']}
            />
          </div>
      </div>
      <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Checkbox
              withText={'Tiene?'}
              value={children}
              onChange={handleChildren}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Hijos'
              isLabelCenter
              placeholder='Ingrese los nombres de los hijos'
              nameProp='children'
              options={['Sí', 'No']}
            />
          </div>
          <div className="input-editPatient-box">
            <Checkbox
              withText={'Tiene?'}
              options={['Sí', 'No']}
              value={siblings}
              onChange={handleSiblings}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Hermanos'
              isLabelCenter
              placeholder='Ingrese los nombres de los hermanos'
              nameProp='siblings'
            />
          </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <div className="yesOrNoCheckboxes">
            <Checkbox
              hasLabel
              labelTitle='¿Viven todos/as sus hermanos/as?'
              options={['Sí', 'No']}
              oneChoice
              onlyCheckboxes
              colorLabel='var(--black-bg)'
              isLabelCenter
            />
          </div>
        </div>
        <div className="input-editPatient-box">
            <Select
              isSingle
              options={[
                {
                  value: '',
                  text: 'Seleccione un valor',
                },
                {
                  value: 'Tipo A',
                  text: 'Tipo A',
                },
                {
                  value: 'Tipo B',
                  text: 'Tipo B',
                },
                {
                  value: 'Tipo AB',
                  text: 'Tipo AB',
                },
                {
                  value: 'Tipo O',
                  text: 'Tipo O',
                },
              ]}
              onChange={handleBloodType}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Grupo sanguíneo'
              isLabelCenter
              nameProp='bloodType'
            />
          </div>
      </div>
      <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Checkbox
              withText
              options={[]}
              onChange={handleHasAllergies}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Tiene alguna alergia?'
              placeholder='Nombre la/as alergia/s'
              isLabelCenter
              nameProp='hasAllergies'
            />
          </div>
          <div className="input-editPatient-box">
            <Checkbox
              withText
              options={[]}
              onChange={handleChronicDisease}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Tiene alguna enfermedad crónica?'
              placeholder='Nombre la/s enfermedades'
              isLabelCenter
              nameProp='chronicDisease'
            />
          </div>
      </div>
      <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Checkbox
              withText
              options={[]}
              onChange={handleMedication}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Toma algún medicamento?'
              placeholder='Nombre los medicamentos'
              isLabelCenter
              nameProp='medication'
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