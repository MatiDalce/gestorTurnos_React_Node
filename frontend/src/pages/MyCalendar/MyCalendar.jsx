import React from 'react';
import Modal from '../../components/Modal/Modal';
import './myCalendar.css';

const MyCalendar = () => {
  return (
    <div className="calendar-bg">
      <Modal />
      <div className="calendar-container">
      <h1>Calendario</h1>
      </div>
    </div>
  )
}

export default MyCalendar