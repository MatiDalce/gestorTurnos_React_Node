import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from '../../components/Modal/Modal';
import './myCalendar.css';

const MyCalendar = ({ eventsList }) => {

  // FALTA QUE AL HACER CLICK EN UNA FECHA TE DEVUELVA LA DATA DE ESE EVENTO PARA MANDARLA AL MODAL

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
    }
  ];

  const handleDateClick = (e) => {
    // console.log(e.date); // Fecha formato largo
    // console.log(e.dateStr); // Fecha formato string yyyy-mm-dd
    console.log(e.view);
  }

  return (
        <div className="calendar-box">
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
            // loading={isLoading}
            // weekends={false} // Si no quiere fines de semana
            
          />
        </div>
  )
}

export default MyCalendar