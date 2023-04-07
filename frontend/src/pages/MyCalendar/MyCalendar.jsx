import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'; 
import Modal from '../../components/Modal/Modal';
import './myCalendar.css';
import { config } from '../../env/config';

const MyCalendar = () => {

  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
    // fetch(`${config.webAPI}/`)
    // .then(res => res.json())
    // .then(res => setEventsList(res))
  }, [])

  const [openModal, setOpenModal] = useState(false)
  const [modalData, setModalData] = useState({
    title: 'TITULO',
    date: '2023/05/12',
    description: 'The specified value "9" does not conform to the required format.  The format is "HH:mm", "HH:mm:ss" or "HH:mm:ss.SSS" where HH is 00-23, mm is 00-59, ss is 00-59, and SSS is 000-999.',
  })


  // Esto convierte al formato que necesita el calendario
  // new Date(la fecha).toISOString()

  const hardcodeEvents = [
    { 
      id: 1,
      title: 'Evento 1',
      start: '2023-04-01T00:00:00.000Z',
    },
    { 
      id: 2,
      title: 'Evento 2',
      start: '2023-04-02T14:00:00',
    },
    { 
      id: 3,
      title: 'Evento 3',
      start: '2023-04-03T14:00:00',
    },
    { 
      id: 4,
      title: 'Evento 4',
      start: '2023-04-04T17:00:00',
    },
  ];

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleDateClick = (e) => {
    console.log(e.date); // Fecha formato largo
    console.log(e.dateStr); // Fecha formato string yyyy-mm-dd
  }

  function handleEventOnClick(eventInfo) {
    // console.log('eventInfo => ', eventInfo); // El evento completo
    // console.log('eventInfo => ', eventInfo.el.fcSeg.eventRange.def.title); // Titulo
    setModalData({ ...modalData, title: eventInfo.el.fcSeg.eventRange.def.title })
    handleOpenModal()
  }

  return (
        <div className="calendar-box">
          {
            openModal && <Modal setter={handleOpenModal} isOpen={openModal} onClose={setOpenModal} title={modalData.title} description={modalData.description} date={modalData.date} />
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
            footerToolbar={{
              start: "today prev,next",
            }}
            locale={esLocale} // Idioma
            dateClick={handleDateClick} // Da info sobre el día
            eventClick={handleEventOnClick} // Da info sobre el evento
            eventBackgroundColor='var(--skyblue-bg)'
            stickyHeaderDates // Mantiene pegadas las cabeceras de los días
            // loading={true}
            // weekends={false} // Quita los fines de semana
          />
        </div>
  )
}

export default MyCalendar