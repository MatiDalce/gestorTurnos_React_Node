import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './editShift.css';

const EditShift = () => {

  const handleDate = () => {};
  const handleTime = () => {};
  const handleNotes = () => {};

  return (
    <>
      <div className="input-row-shift">
          <Input
            onChange={handleDate}
            value='2023-06-13'
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
            value='22:53:05' // hh:mm:ss.ms
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
          value='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model  text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
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
          title={'Editar'} 
          type='button'
          width='20%'
          margin='5% 0'
        />
      </div>
    </>
  )
}

export default EditShift