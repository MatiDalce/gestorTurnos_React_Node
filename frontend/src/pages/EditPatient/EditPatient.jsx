import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '../../assets/helpers/toast';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import './editPatient.css';
import { config } from '../../env/config';
import { warningEditAlert } from '../../assets/helpers/customAlert';
import { convertUnixtimeToDate } from '../../assets/helpers/unixtimeToSomething';

const EditPatient = () => {
  const navigate = useNavigate()
  const { id } = useParams() 

  const [error, setError] = useState(false);

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
    // livingSiblings: '',
    personalPhoneNumber: '',
    contactPhone: '',
    academicLevel: '',
    hasChronicDisease: '',
    chronicDisease: '',
    hasAllergies: '',
    allergies: '',
    bloodType: '',
    takesMedication: '',
    medication: '',
  })

  useEffect(() => {
    fetch(`${config.webAPI}/patients/${id}`)
    .then(res => res.json())
    .then(res => {
      if(!res.errors) {
        // SETEO DE ESTADO
        setPatient({
          name: res.name,
          lastName: res.lastName,
          dni: res.dni,
          socialNetwork: res.socialService, // No viene desde BE
          gender: res.gender, // No viene desde BE
          maritalStatus: res.maritalStatus,
          email: res.email,
          birthday: convertUnixtimeToDate(res.birthday),
          academicLevel: res.academicLevel,
          father: res.father, // No viene desde BE
          mother: res.mother, // No viene desde BE
          children: res.children, 
          siblings: res.siblings,
          // livingSiblings: res.livingSiblings, // No viene desde BE
          personalPhoneNumber: res.personalPhoneNumber,
          contactPhone: res.contactPhone,
          bloodType: res.bloodType,
          hasChronicDisease: res.hasChronicDisease,
          chronicDisease: res.chronicDisease,
          hasAllergies: res.hasAllergies,
          allergies: res.allergies,
          takesMedication: res.takesMedication,
          medication: res.medication,
        })
      } else {
        setError(true)
      }
    })
  }, [id])

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
  const handleAcademicLevel = (e) => {
    setPatient({
      ...patient,
      academicLevel: e.target.value
    })
  }
  // const handleLivingSiblings = (value) => {
  //   setPatient({
  //     ...patient,
  //     livingSiblings: value
  //   })
  // }
  const handlePersonalPhone = (e) => {
    setPatient({
      ...patient,
      personalPhoneNumber: e.target.value
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
      chronicDisease: value
    })
  }
  const handleAllergies = (value) => {
    setPatient({
      ...patient,
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
      medication: value
    })
  }

  const handleEditPatient = (e) => {
    e.preventDefault()
    let body = {
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
    warningEditAlert(
      `${config.webAPI}/patients/${id}`,
      body,
      'Esta por editar el paciente',
      'Esta acción no se puede deshacer ¿Está seguro?'
    ).then(res => {
      console.log(res);
      if(!res.errors) {
        navigate('/listado-pacientes')
        toast('success', 'Se ha editado exitosamente')
      } else {
        toast('error', 'No se ha podido editar')
      }
    })
  }

  return (
    <>
      <h2 className='editPatient-title'>EDICIÓN DE DATOS DEL PACIENTE</h2>
      <form>

        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
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
          { error && <p className='addPatient-error'>Este campo es requerido.</p> }
          </div>
          <div className="input-editPatient-box">
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
            { error && <p className='addPatient-error'>Este campo es requerido.</p> }
          </div>
        </div>
        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Input
              value={patient.dni}
              onChange={handleDNI}
              type='number'
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='DNI del paciente'
              isLabelCenter
              placeholder='Ingrese el DNI'
              nameProp='dni'
            />
            { error && <p className='addPatient-error'>Este campo es requerido.</p> }
          </div>
          <div className="input-editPatient-box">
            <Checkbox
              formType='edit'
              hasLabel
              labelTitle='Género'
              options={['Masculino', 'Femenino', 'Otro']}
              value={patient.gender}
              onlyCheckboxes
              colorLabel='var(--black-bg)'
              isLabelCenter
              nameProp='gender'
              onChangeOnlyBoxes={handleGender}
              isChecked={patient.gender}
            />
            { error && <p className='addPatient-error'>Este campo es requerido.</p> }
          </div>
        </div>
        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
              <Input
                value={patient.email}
                onChange={handleEmail}
                type={'email'}
                colorLabel='var(--black-bg)' 
                hasLabel
                labelTitle='Email'
                isLabelCenter
                placeholder='Ingrese el email'
                nameProp='email'
              />
          </div>
          <div className="input-editPatient-box">
            <Input
              value={patient.socialNetwork}
              onChange={handleSocialNetwork}
              colorLabel='var(--black-bg)' 
              hasLabel
              labelTitle='Obra Social del paciente'
              isLabelCenter
              placeholder='Ingrese la obra social'
              nameProp='socialService'
            />
          </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <Input
            value={patient.birthday}
            onChange={handleBirthday}
            colorLabel='var(--black-bg)' 
            type={'date'}
            hasLabel
            labelTitle='Fecha de nacimiento'
            isLabelCenter
            placeholder='Ingrese la fecha de nacimiento'
            nameProp='birthday'
          />
        </div>
        <div className="input-editPatient-box">
          <Checkbox
            formType='edit'
            options={['Casado', 'Soltero', 'Divorciado', 'Viudo']}
            onlyCheckboxes
            value={patient.maritalStatus}
            onChangeOnlyBoxes={handleMaritalStatus}
            colorLabel='var(--black-bg)'
            hasLabel
            labelTitle='Estado civil'
            isLabelCenter
            nameProp='maritalStatus'
            isChecked={patient.maritalStatus}
          />
        </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <Input
            value={patient.personalPhoneNumber}
            onChange={handlePersonalPhone}
            colorLabel='var(--black-bg)' 
            type='number'
            hasLabel
            labelTitle='Teléfono personal'
            isLabelCenter
            placeholder='Ingrese el teléfono personal'
            nameProp='personalPhoneNumber'
          />
        </div>
        <div className="input-editPatient-box">
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
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <Checkbox
            formType='edit'
            withText={'¿Vive?'}
            value={patient.father}
            isChecked={patient.father !== ''}
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
              formType='edit'
              withText={'¿Vive?'}
              value={patient.mother}
              isChecked={patient.mother !== ''}
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
              formType='edit'
              withText={'Tiene?'}
              value={patient.children}
              isChecked={patient.children !== ''}
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
              formType='edit'
              withText={'Tiene?'}
              options={['Sí', 'No']}
              isChecked={patient.siblings !== ''}
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
      <div className="input-editPatient-row input-editPatient-row-extra">
        {/* <div className="input-editPatient-box">
            <div className="yesOrNoCheckboxes">
              <Checkbox
                formType='edit'
                onlyCheckboxes
                hasLabel
                onChangeOnlyBoxes={handleLivingSiblings}
                value={patient.livingSiblings}
                labelTitle='¿Viven todos/as sus hermanos/as?'
                options={['Sí', 'No']}
                colorLabel='var(--black-bg)'
                isLabelCenter
                nameProp='livingSiblings'
              />
            </div>
        </div> */}
        <div className="input-editPatient-box">
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
            value={patient.academicLevel}
            onChange={handleAcademicLevel}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Nivel académico'
            isLabelCenter
            nameProp='academicLevel'
          />
        </div>
        <div className="input-editPatient-box">
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
            value={patient.bloodType}
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
            formType='edit'
            withText
            onChange={handleAllergies}
            isChecked={patient.hasAllergies === '1'}
            value={patient.allergies}
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
            formType='edit'
            withText
            onChange={handleMedication}
            isChecked={patient.takesMedication === '1'}
            value={patient.medication}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='¿Toma algún medicamento?'
            placeholder='Nombre los medicamentos'
            isLabelCenter
            nameProp='medication'
          />
        </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <Checkbox
            formType='edit'
            withText
            onChange={handleChronicDisease}
            isChecked={patient.hasChronicDisease === '1'}
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

      <div className="btn-editPatient-center">
        <div className='btn-editPatient-container'>
          <Button 
            title={'Editar'} 
            type='submit'
            onClick={handleEditPatient}
            isDisabled={
              patient.name === '' ||
              patient.lastName === '' ||
              patient.email === '' ||
              patient.dni === '' ||
              patient.gender === ''
            }
          />
        </div>
      </div>

      </form>
    </>
  )
}

export default EditPatient