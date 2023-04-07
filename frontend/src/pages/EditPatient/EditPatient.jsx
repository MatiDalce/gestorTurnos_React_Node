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

const EditPatient = () => {
  const navigate = useNavigate()
  const { id } = useParams() 

  const [patient, setPatient] = useState({
    name: '',
    lastName: '',
    dni: '',
    socialNetwork: '',
    age: '',
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
    chronicDisease: '',
    hasAllergies: '',
    bloodType: '',
    medication: '',
  })

  useEffect(() => {
    fetch(`${config.webAPI}/patients/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);

      // EDAD: Convertir formato unixtime a número
        function convertUnixtimeToAge(date) {
          const hoy = new Date();
          let edad = hoy.getFullYear() - date.getFullYear();
          const mes = hoy.getMonth() - date.getMonth();
          if (mes < 0 || (mes === 0 && hoy.getDate() < date.getDate())) {
            edad--;
          }
          return edad;
        }
      // FECHA DE NACIMIENTO: Convertir formato unixtime a fecha
        function convertUnixtimeToDate(date) {
          const dateObj = new Date(date * 1000);
          const formattedDate = dateObj.toLocaleDateString('es-ES', {
            day: '2-digit', month: '2-digit', year: 'numeric'
          });
          return formattedDate
        }

      setPatient({
        name: res.name,
        lastName: res.lastName,
        dni: res.dni,
        socialNetwork: res.socialService, // No viene desde BE
        age: convertUnixtimeToAge(new Date(res.birthday * 1000)), // No viene desde BE
        gender: res.gender, // No viene desde BE
        maritalStatus: res.maritalStatus,
        birthday: convertUnixtimeToDate(res.birthday),
        father: res.father, // No viene desde BE
        mother: res.mother, // No viene desde BE
        children: res.children, 
        siblings: res.siblings,
        livingSiblings: res.livingSiblings, // No viene desde BE
        personalPhoneNumber: res.personalPhoneNumber,
        contactPhone: res.contactPhone,
        chronicDisease: res.hasChronicDisease,
        hasAllergies: res.hasAllergies,
        bloodType: res.bloodType,
        medication: res.medication,
      })
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
  const handleAge = (e) => {
    setPatient({
      ...patient,
      age: e.target.value
    })
  };
  const handleGenre = (value) => {
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
      personalPhoneNumber: e.target.value
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
  const handleEditPatient = (e) => {
    e.preventDefault()
    let body = {
      name: patient.name,
      lastName: patient.lastName,
      dni: patient.dni, // Number
      socialService: patient.socialNetwork,
      email: patient.email,
      gender: patient.gender,
      birthday: patient.birthday, // Number
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
      if(!res) {
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
              nameProp='social-work'
            />
          </div>
        </div>
        <div className="input-editPatient-row">
          <div className="input-editPatient-box">
            <Input
              value={patient.age}
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
              onChange={handleGenre}
              checkValue={patient.gender}
            />
          </div>
      </div>
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
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
            checkValue={patient.maritalStatus}
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
          <div className="input-editPatient-box">
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
      <div className="input-editPatient-row">
          <div className="input-editPatient-box">
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
          <div className="input-editPatient-box">
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
      <div className="input-editPatient-row">
        <div className="input-editPatient-box">
          <div className="yesOrNoCheckboxes">
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
            type='submit'
            onClick={handleEditPatient}
          />
        </div>
      </div>

      </form>
    </>
  )
}

export default EditPatient