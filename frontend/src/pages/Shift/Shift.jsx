import React from 'react'
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import './shift.css'

const Shift = () => {
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
        value='It is a long established fact that a reader 
        will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
        letters, as opposed to using Content here, content here, making it look like readable English. 
        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
        text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various 
        versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour 
          and the like). It is a long established fact that a reader will be distracted by the readable 
          content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
          more-or-less normal distribution of letters, as opposed to using Content here, content here, 
          making it look like readable English. Many desktop publishing packages and web page editors 
          now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover 
          many web sites still in their infancy. Various versions have evolved over the years, sometimes 
          by accident, sometimes on purpose (injected humour and the like). It is a long established fact 
          that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
          opposed to using Content here, content here, making it look like readable English. Many desktop 
          publishing packages and web page editors now use Lorem Ipsum as their default model text, and a 
          search for lorem ipsum will uncover many web sites still in their infancy. Various versions have 
          evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
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