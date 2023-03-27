import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '../../components/Modal/Modal';
import './myCalendar.css';

const MyCalendar = ({ eventsList }) => {

  // FALTA QUE AL HACER CLICK EN UNA FECHA TE DEVUELVA LA DATA DE ESE EVENTO PARA MANDARLA AL MODAL

  const [openModal, setOpenModal] = useState(false)
  const [modalTitle, setModalTitle] = useState(false)

  const hardcodeEvents = [
    { 
      id: 1,
      title: 'Evento 1',
      start: '2023-03-27T10:00:00',
      end: '2023-03-27T12:00:00',
    },
    { 
      id: 2,
      title: 'Evento 2',
      start: '2023-03-27T14:00:00',
      end: '2023-03-27T16:00:00',
    },
    { 
      id: 3,
      title: 'Evento 2',
      start: '2023-03-28T14:00:00',
      end: '2023-03-28T16:00:00',
    },
    { 
      id: 4,
      title: 'Evento 4',
      start: '2023-03-29T17:00:00',
      end: '2023-03-29T18:00:00',
    },
  ];

  const handleDateClick = (e) => {
    console.log(e.date); // Fecha formato largo
    console.log(e.dateStr); // Fecha formato string yyyy-mm-dd
    
  }

  function handleEventOnClick(eventInfo) {
    // console.log('eventInfo => ', eventInfo); // El evento completo
    // console.log('eventInfo => ', eventInfo.el.fcSeg.eventRange.def.title); // Titulo
    setModalTitle(eventInfo.el.fcSeg.eventRange.def.title)
    setOpenModal(true)
  }

  return (
        <div className="calendar-box">
          {
            openModal && <Modal title={modalTitle} />
          }
          <FullCalendar 
            events={hardcodeEvents}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next",
              center: "title",
              end: "dayGridMonth, timeGridWeek, timeGridDay",
            }}
            dateClick={handleDateClick} // Da info sobre el día
            eventClick={handleEventOnClick} // Da info sobre el evento
            // loading={isLoading}
            // weekends={false} // Si no quiere fines de semana
          />
        </div>
  )
}

export default MyCalendar