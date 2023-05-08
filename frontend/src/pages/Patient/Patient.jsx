import React, { useEffect, useState } from 'react'
import './patient.css';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { convertUnixtimeToAge, convertUnixtimeToDate } from '../../assets/helpers/unixtimeToSomething';
import { config } from '../../env/config';
import { toast } from '../../assets/helpers/toast';
import Swal from 'sweetalert2';

const Patient = () => {
  let {id} = useParams();
  const navigate = useNavigate()
  // ===== ESTADO =====
  const [patient, setPatient] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const patientNotExist = () => {
      Swal.fire({
        icon: 'error',
        title: "Paciente no encontrado",
        text: "Será redirigido a la lista de pacientes.",
        confirmButtonColor: 'var(--skyblue-bg)',
      }).then(() => {
          navigate('/listado-pacientes')
      })
    }
    // ===== GET DEL PACIENTE =====
    fetch(`${config.webAPI}/patients/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res){
        if(res.message && res.message === "No patient record found for the given ID") {
          patientNotExist()
        } else {
          setPatient({
            ...res,
            birthday: convertUnixtimeToDate(res.birthday),
            age: convertUnixtimeToAge(new Date(res.birthday * 1000))
          })
        }
      } else {
        toast('error', 'Algo salió mal, por favor recargue la página.')
        patientNotExist()
      }
    })
    .finally(() => setLoading(false));
  }, [id, navigate])

  // ===== DELETE DEL PACIENTE =====
  const handleDelete = () => {
    Swal.fire({
      title: 'Está por borrar este paciente',
      text: 'Esta acción no se puede deshacer ¿Está seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--skyblue-bg)',
      cancelButtonColor: 'var(--red-bg)',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(`${config.webAPI}/patients/${id}`, {
              method: 'DELETE'
          })
          .then(response => {
            if (!response.ok) {
              toast('error', 'No se ha podido eliminar el paciente')
              return Promise.reject(new Error("FALLÓ"))
            } else return response.json();
          })
          .then((res) => {
            if(res) {
              toast('success', 'Paciente eliminado exitosamente')
              navigate('/listado-pacientes')
            } else {
              toast('error', 'No se ha podido eliminar el paciente')
            }
          })
      }
    })

  }

  // ===== HTML =====
  if(loading) return <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%'}}><Spinner /></div>
  return (
    <>
      <p className='patient-title'>{patient.name} {patient.lastName}</p>
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Nombre</p>
          <p className="data">{patient.name || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Apellido</p>
          <p className="data">{patient.lastName || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">DNI</p>
          <p className="data">{patient.dni || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Email</p>
          <p className="data">{patient.email || '-'}</p>
        </div>
      </div>

      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Género</p>
          <p className="data">{patient.gender || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Orientación Sexual</p>
          <p className="data">{patient.sexualOrientation || '-'}</p>
        </div>
      </div>

      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Obra Social</p>
          <p className="data">{patient.socialService || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Fecha de nacimiento</p>
          <p className="data">{patient.birthday || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Edad</p>
          <p className="data">{isNaN(patient.age) ? "-" : `${(patient.age)} años`}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Estado civil</p>
          <p className="data">{patient.maritalStatus || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Padre</p>
          <p className="data">{patient.father || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Madre</p>
          <p className="data">{patient.mother || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Hijos</p>
          <p className="data">{patient.children || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Hermanos</p>
          <p className="data">{patient.siblings || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Teléfono personal</p>
          <p className="data">{patient.personalPhoneNumber || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Teléfono de contacto</p>
          <p className="data">{patient.contactPhone || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">Nivel académico cursado</p>
          <p className="data">{patient.academicLevel || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">Grupo sanguíneo</p>
          <p className="data">{patient.bloodType || '-'}</p>
        </div>
      </div>
      
      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">¿Toma algún medicamento?</p>
          <p className="data">{patient.medication || '-'}</p>
        </div>
        <div className="input-box">
          <p className="data-title">¿Tiene alguna alergia?</p>
          <p className="data">{patient.allergies || '-'}</p>
        </div>
      </div>

      <div className="input-patient-row">
        <div className="input-box">
          <p className="data-title">¿Tiene alguna enfermedad crónica?</p>
          <p className="data">{patient.chronicDisease || '-'}</p>
        </div>
      </div>

      <div className='btn-patient-container'>
        <div className="btn-patient-box">
          <Button 
            path={`/editar-paciente/${id}`}
            title={'Editar'} 
            type='button'
          />
        </div>
        <div className="btn-patient-box">
          <Button 
            path={`/turnos-paciente/${id}`}
            title={'Ver Turnos'} 
            type='button'
            bgColor='var(--green-bg)'
          />
        </div>
        <div className="btn-patient-box">
          <Button 
            path={`/agregar-turno`}
            data={{value: patient.id, text: `${patient.name} ${patient.lastName}`}}
            title={'Agregar Turno'} 
            type='button'
            bgColor='var(--green-bg)'
          />
        </div>
        <div className="btn-patient-box">
          <Button 
            title={'Borrar'} 
            type='button'
            bgColor='var(--red-bg)'
            onClick={handleDelete}
          />
        </div>
      </div>
    </>
  )
}

export default Patient