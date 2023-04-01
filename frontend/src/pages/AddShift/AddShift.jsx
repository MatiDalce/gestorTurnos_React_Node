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
        <div className="addShift-input-container">
          <Input
            onChange={handleDate}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Fecha'
            isLabelCenter
            type='date'
            nameProp='date'
          />
        </div>
        <div className="addShift-input-container">
          <Input
            onChange={handleTime}
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Hora'
            isLabelCenter
            placeholder='Ingrese la hora'
            type='time'
            nameProp='hour'
          />
        </div>
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
        />
      </div>
      <div className='btn-addShift-container'>
        <Button 
          title={'Agregar'} 
          type='button'
        />
      </div>
    </>
  )
}

export default AddShift