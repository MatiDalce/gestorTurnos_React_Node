import React from 'react'
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import './shift.css'

const Shift = () => {
  let {id} = useParams();
  return (
    <>
    <Title title='DIEGO PEREZ' />

    <div className="data-shift-box-container">
      <div className="data-shift-box">
        <p className="data-shift">Fecha del turno</p>
        <p className="data">13/05/2023</p>
      </div>

      <div className="data-shift-box">
        <p className="data-shift">Horario del turno</p>
        <p className="data">19:36hs</p>
      </div>
    </div>

    <div className="textarea-input-shift">
      <Input
        value=''
        isDisabled
        colorLabel='var(--black-bg)' 
        hasLabel
        labelTitle='Notas'
        isLabelCenter
        type='textarea'
        nameProp='notes'
        inputWidth='80%'
      />
    </div>
    <div className='btn-shift-container'>
      <Button 
        path={`/editar-turno/${id}`}
        title={'Editar'} 
        type='button'
        width='20%'
        margin='5% 0'
      />
      <Button 
        title={'Borrar'} 
        type='button'
        width='20%'
        margin='5% 0'
        bgColor={'var(--red-bg)'}
      />
    </div>
  </>
  )
}

export default Shift