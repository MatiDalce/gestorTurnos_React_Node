import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import './addPatient.css';

const AddPatient = () => {

  const { id } = useParams()

  const [patient, setPatient] = useState({
    name: '',
    lastName: '',
    dni: '',
    socialNetwork: '',
    email: '',
    genre: '',
    maritalStatus: '',
    birthday: '',
    father: '',
    mother: '',
    children: '',
    siblings: '',
    livingSiblings: '',
    personalPhone: '',
    contactPhone: '',
    chronicDisease: '',
    hasAllergies: '',
    bloodType: '',
    medication: '',
  })

  const handleName = (e) => {
    setPatient({
      ...patient,
      name: e.target.value
    })
  };
  const handleLastName = (e) => {
    setPatient({
      ...patient,
      lastName: e.target.value
    })
  };
  const handleDNI = (e) => {
    setPatient({
      ...patient,
      dni: e.target.value
    })
  };
  const handleSocialNetwork = (e) => {
    setPatient({
      ...patient,
      socialNetwork: e.target.value
    })
  };
  const handleEmail = (e) => {
    setPatient({
      ...patient,
      email: e.target.value
    })
  };
  const handleGenre = (value) => {
    setPatient({
      ...patient,
      genre: value
    })
  };
  const handleMaritalStatus = (value) => {
    setPatient({
      ...patient,
      maritalStatus: value
    })
  }
  const handleBirthday = (e) => {
    setPatient({
      ...patient,
      birthday: e.target.value
    })
  }
  const handleFather = (e) => {
    setPatient({
      ...patient,
      father: e.target.value
    })
  }
  const handleMother = (e) => {
    setPatient({
      ...patient,
      mother: e.target.value
    })
  }
  const handleChildren = (e) => {
    setPatient({
      ...patient,
      children: e.target.value
    })
  }
  const handleSiblings = (e) => {
    setPatient({
      ...patient,
      siblings: e.target.value
    })
  }
  const handleLivingSiblings = (value) => {
    setPatient({
      ...patient,
      livingSiblings: value
    })
  }
  const handlePersonalPhone = (e) => {
    setPatient({
      ...patient,
      personalPhone: e.target.value
    })
  }
  const handleContactPhone = (e) => {
    setPatient({
      ...patient,
      contactPhone: e.target.value
    })
  }
  const handleChronicDisease = (e) => {
    setPatient({
      ...patient,
      chronicDisease: e.target.value
    })
  }
  const handleHasAllergies = (e) => {
    setPatient({
      ...patient,
      hasAllergies: e.target.value
    })
  }
  const handleBloodType = (e) => {
    setPatient({
      ...patient,
      bloodType: e.target.value
    })
  }
  const handleMedication = (e) => {
    setPatient({
      ...patient,
      medication: e.target.value
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    // console.log(patient);

    fetch(`http://localhost:3001/patients/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(id);
      console.log(res);
    })
  }

  return (
    <>
        <Title title='DATOS DEL PACIENTE' />
        <form onSubmit={handleForm}>
        <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.name}
              onChange={handleName}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Nombre del paciente'
              isLabelCenter
              placeholder='Ingrese el nombre'
              nameProp='name'
            />
          </div>
          <div className="addPatient-box">
            <Input
              value={patient.lastName}
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
        <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.dni}
              onChange={handleDNI}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='DNI del paciente'
              isLabelCenter
              placeholder='Ingrese el DNI'
              nameProp='dni'
            />
          </div>
          <div className="addPatient-box">
            <Input
              value={patient.socialNetwork}
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
        <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.email}
              onChange={handleEmail}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Email'
              isLabelCenter
              placeholder='Ingrese la edad'
              nameProp='email'
            />
          </div>
          <div className="addPatient-box">
            <Checkbox
              hasLabel
              labelTitle='Género'
              options={['Masculino', 'Femenino', 'Otro']}
              oneChoice
              onlyCheckboxes
              colorLabel='var(--black-bg)'
              isLabelCenter
              nameProp='genre'
              onChange={handleGenre}
            />
          </div>
      </div>
      <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.birthday}
              onChange={handleBirthday}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Fecha de nacimiento'
              isLabelCenter
              placeholder='Ingrese la fecha de nacimiento'
              nameProp='birthday'
            />
          </div>
          <div className="addPatient-box">
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
      <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.personalPhone}
              onChange={handlePersonalPhone}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Teléfono personal'
              isLabelCenter
              placeholder='Ingrese el teléfono personal'
              nameProp='personalPhone'
            />
          </div>
          <div className="addPatient-box">
            <Input
              value={patient.contactPhone}
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
      <div className="input-row">
          <div className="addPatient-box">
            <Checkbox
              withText={'¿Vive?'}
              oneChoice
              value={patient.father}
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
          <div className="addPatient-box">
          <Checkbox
              withText={'¿Vive?'}
              oneChoice
              value={patient.mother}
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
      <div className="input-row">
        <div className="addPatient-box">
          <Checkbox
            withText={'Tiene?'}
            value={patient.children}
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
        <div className="addPatient-box">
          <Checkbox
            withText={'Tiene?'}
            options={['Sí', 'No']}
            value={patient.siblings}
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
      <div className="input-row">
        <div className="addPatient-box">
          <Checkbox
            onlyCheckboxes
            hasLabel
            onChange={handleLivingSiblings}
            labelTitle='¿Viven todos/as sus hermanos/as?'
            options={['Sí', 'No']}
            oneChoice
            colorLabel='var(--black-bg)'
            isLabelCenter
            nameProp='livingSiblings'
          />
        </div>
        <div className="addPatient-box">
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
      <div className="input-row">
          <div className="addPatient-box">
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
          <div className="addPatient-box">
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
      <div className="input-row">
          <div className="addPatient-box">
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
      
      <div className="btn-addPatient-center">
        <div className='btn-addPatient-container'>
          <Button 
            title={'Registrar'} 
            type='submit'
          />
        </div>
      </div>

      </form>
    </>
  )
}

export default AddPatient