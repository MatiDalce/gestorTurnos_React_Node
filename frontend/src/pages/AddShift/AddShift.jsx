import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import './addShift.css';

const AddShift = () => {
  return (
    <>
      <div className="select-patient-input">
        <Select
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
            colorLabel='var(--black-bg)' 
            hasLabel
            labelTitle='Fecha'
            isLabelCenter
            type='date'
            nameProp='date'
            inputWidth='30%'
          />
          <Input
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