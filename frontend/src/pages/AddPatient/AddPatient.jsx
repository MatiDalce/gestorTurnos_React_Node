import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '../../assets/helpers/toast'
import { config } from '../../env/config';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import './addPatient.css';

const AddPatient = () => {
  const navigate = useNavigate()

  
  const [patient, setPatient] = useState({
    name: '',
    lastName: '',
    dni: '',
    socialService: '',
    email: '',
    gender: '',
    maritalStatus: '',
    birthday: '',
    father: '',
    mother: '',
    children: '',
    siblings: '',
    livingSiblings: '',
    personalPhoneNumber: '',
    contactPhone: '',
    academicLevel: '',
    hasChronicDisease: '0',
    chronicDisease: '',
    hasAllergies: '0',
    allergies: '',
    bloodType: '',
    takesMedication: '0',
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
  const handleSocialService = (e) => {
    setPatient({
      ...patient,
      socialService: e.target.value
    })
  };
  const handleEmail = (e) => {
    setPatient({
      ...patient,
      email: e.target.value
    })
  };
  const handleGender = (value) => {
    setPatient({
      ...patient,
      gender: value
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
  const handleFather = (value) => {
    setPatient({
      ...patient,
      father: value
    })
  }
  const handleMother = (value) => {
    setPatient({
      ...patient,
      mother: value
    })
  }
  const handleChildren = (value) => {
    setPatient({
      ...patient,
      children: value
    })
  }
  const handleSiblings = (value) => {
    setPatient({
      ...patient,
      siblings: value
    })
  }
  const handleLivingSiblings = (value) => {
    setPatient({
      ...patient,
      livingSiblings: value
    })
  }
  const handlePersonalPhoneNumber = (e) => {
    setPatient({
      ...patient,
      personalPhoneNumber: e.target.value
    })
  }
  const handleAcademicLevel = (e) => {
    setPatient({
      ...patient,
      academicLevel: e.target.value
    })
  }
  const handleContactPhone = (e) => {
    setPatient({
      ...patient,
      contactPhone: e.target.value
    })
  }
  const handleChronicDisease = (value) => {
    setPatient({
      ...patient,
      hasChronicDisease: value !== '' ? true : false, 
      chronicDisease: value
    })
  }
  const handleHasAllergies = (value) => {
    setPatient({
      ...patient,
      hasAllergies: value !== '' ? true : false, 
      allergies: value
    })
  }
  const handleBloodType = (e) => {
    setPatient({
      ...patient,
      bloodType: e.target.value
    })
  }
  const handleMedication = (value) => {
    setPatient({
      ...patient,
      takesMedication: value !== '' ? true : false, 
      medication: value
    })
  }

  const handleAddPatient = (e) => {
    e.preventDefault()
    let data = {
      name: patient.name,
      lastName: patient.lastName,
      dni: patient.dni, // Number
      socialService: patient.socialService,
      email: patient.email,
      gender: patient.gender,
      birthday: patient.birthday ? Date.parse(patient.birthday) / 1000 : 0, // Number
      maritalStatus: patient.maritalStatus,
      personalPhoneNumber: patient.personalPhoneNumber, // Number
      contactPhone: patient.contactPhone,
      familyMembers: '', // ! ESTE VA?
      parents: '', // ! ESTE VA?
      father: patient.father,
      mother: patient.mother,
      children: patient.children,
      siblings: patient.siblings,
      academicLevel: patient.academicLevel,
      bloodType: patient.bloodType,
      hasAllergies: patient.hasAllergies, // Boolean pero con 0 o 1
      allergies: patient.allergies,
      takesMedication: patient.takesMedication, // Boolean pero con 0 o 1
      medication: patient.medication,
      hasChronicDisease: patient.hasChronicDisease, // Boolean pero con 0 o 1
      chronicDisease: patient.chronicDisease,
    }

    fetch(`${config.webAPI}/patients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res) {
        toast('success', 'Paciente agregado exitosamente')
        navigate('/listado-pacientes')
      } else {
        toast('error', 'No se pudo agregar el paciente')
      }
    })
  }

  return (
    <>
        <Title title='DATOS DEL PACIENTE' />
        <form onSubmit={handleAddPatient}>
        <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.name}
              onChange={handleName}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Nombre del paciente'
              isLabelCenter
              isRequired
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
              isRequired
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
              isRequired
              type='number'
              limitNumber={99999999999}
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
              value={patient.socialService}
              onChange={handleSocialService}
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
              isRequired
              hasLabel
              labelTitle='Email'
              isLabelCenter
              placeholder='Ingrese la edad'
              nameProp='email'
            />
          </div>
          <div className="addPatient-box">
            <Checkbox
              formType='new'
              hasLabel
              labelTitle='Género'
              options={['Masculino', 'Femenino', 'Otro']}
              isRequired
              onlyCheckboxes
              colorLabel='var(--black-bg)'
              isLabelCenter
              nameProp='gender'
              onChangeOnlyBoxes={handleGender}
            />
          </div>
      </div>
      <div className="input-row">
          <div className="addPatient-box">
            <Input
              value={patient.birthday}
              onChange={handleBirthday}
              type='date'
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
              formType='new'
              options={['Casado', 'Soltero', 'Divorciado', 'Viudo']}
              onlyCheckboxes
              onChangeOnlyBoxes={handleMaritalStatus}
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
              value={patient.personalPhoneNumber}
              onChange={handlePersonalPhoneNumber}
              type='number'
              limitNumber={9999999999}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Teléfono personal'
              isLabelCenter
              placeholder='Ingrese el teléfono personal'
              nameProp='personalPhoneNumber'
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
              formType='new'
              withText={'¿Vive?'}
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
            formType='new'
              withText={'¿Vive?'}
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
            formType='new'
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
            formType='new'
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
            formType='new'
            onlyCheckboxes
            hasLabel
            onChangeOnlyBoxes={handleLivingSiblings}
            labelTitle='¿Viven todos/as sus hermanos/as?'
            options={['Sí', 'No']}
            colorLabel='var(--black-bg)'
            isLabelCenter
            nameProp='livingSiblings'
          />
        </div>
        <div className="addPatient-box">
          <Select
            options={[
              {
                value: '',
                text: 'Seleccione un valor',
              },
              {
                value: 'Primaria incompleta',
                text: 'Primaria incompleta',
              },
              {
                value: 'Primaria en curso',
                text: 'Primaria en curso',
              },
              {
                value: 'Primaria completa',
                text: 'Primaria completa',
              },
              {
                value: 'Secundaria incompleta',
                text: 'Secundaria incompleta',
              },
              {
                value: 'Secundaria en curso',
                text: 'Secundaria en curso',
              },
              {
                value: 'Secundaria completa',
                text: 'Secundaria completa',
              },
              {
                value: 'Universidad incompleta',
                text: 'Universidad incompleta',
              },
              {
                value: 'Universidad en curso',
                text: 'Universidad en curso',
              },
              {
                value: 'Universidad completa',
                text: 'Universidad completa',
              },
            ]}
            onChange={handleAcademicLevel}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Nivel académico'
            isLabelCenter
            nameProp='academicLevel'
          />
        </div>
      </div>
      <div className="input-row">
        <div className="addPatient-box">
            <Select
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
              isLabelCenter
              labelTitle='Grupo sanguíneo'
              nameProp='bloodType'
            />
          </div>
          <div className="addPatient-box">
            <Checkbox
              formType='new'
              withText
              onChange={handleHasAllergies}
              colorLabel='var(--black-bg)' 
              hasLabel
              value={patient.allergies}
              labelTitle='¿Tiene alguna alergia?'
              placeholder='Nombre la/as alergia/s'
              isLabelCenter
              nameProp='hasAllergies'
            />
          </div>
      </div>
      <div className="input-row">
        <div className="addPatient-box">
          <Checkbox
            formType='new'
            withText
            onChange={handleMedication}
            value={patient.medication}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='¿Toma algún medicamento?'
            placeholder='Nombre los medicamentos'
            isLabelCenter
            nameProp='medication'
          />
        </div>
        <div className="addPatient-box">
            <Checkbox
              formType='new'
              withText
              onChange={handleChronicDisease}
              value={patient.chronicDisease}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='¿Tiene alguna enfermedad crónica?'
              placeholder='Nombre la/s enfermedades'
              isLabelCenter
              nameProp='chronicDisease'
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