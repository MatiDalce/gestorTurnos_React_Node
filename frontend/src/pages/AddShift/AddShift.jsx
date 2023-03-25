import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import './addShift.css';

const AddShift = () => {

  const handlePatient = () => {}
  const handleDate = () => {}
  const handleTime = () => {}
  const handleNotes = () => {}

  return (
    <>
      <div className="select-patient-input">
        <Select
          onChange={handlePatient}
          options={[
            {text: 'Diego Perez', value: 'diego-perez'},
            {text: 'Camila Surrey', value: 'camila-surrey'},
          ]}
          colorLabel='var(--black-bg)' 
          hasLabel
          labelTitle='Seleccione el paciente'
          isLabelCenter
          nameProp='patients'
        />
      </div>
      <div className="input-row-shift">
          <Input
            onChange={handleDate}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Fecha'
            isLabelCenter
            type='date'
            nameProp='date'
            inputWidth='30%'
          />
          <Input
            onChange={handleTime}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Hora'
            isLabelCenter
            placeholder='Ingrese la hora'
            type='time'
            nameProp='hour'
            inputWidth='30%'
          />
      </div>
      <div className="textarea-input-shift">
        <Input
          onChange={handleNotes}
          colorLabel='var(--black-bg)' 
          hasLabel
          labelTitle='Notas'
          isLabelCenter
          type='textarea'
          nameProp='notes'
          inputWidth='80%'
        />
      </div>
      <div className='btn-addShift-container'>
        <Button 
          title={'Agregar'} 
          type='button'
          width='20%'
          margin='5% 0'
        />
      </div>
    </>
  )
}

export default AddShift