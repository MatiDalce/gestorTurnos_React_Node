import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es'; 
import Modal from '../../components/Modal/Modal';
import './myCalendar.css';
import { config } from '../../env/config';
import Spinner from '../../components/Spinner/Spinner';

const MyCalendar = () => {

  const [openModal, setOpenModal] = useState(false)
  const [eventsList, setEventsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalData, setModalData] = useState({
    id: 0,
    title: '',
    date: '',
    description: '',
  })

  useEffect(() => {
    fetch(`${config.webAPI}/appointments/calendar`)
    .then(res => res.json())
    .then(res => {
      console.log(res.appointmentsCalendar);
      if(res && res.appointmentsCalendar.length > 0) {
        console.log('EEEEEEEEEEEEEEEEEEEEEEEE');
        // Esto modifica el array para que se coloquen los títulos en el calendario
        const appointmentsCalendarWithTitles = res.appointmentsCalendar.map((obj) => {
          return {
            ...obj,
            title: obj.name
          }
        })
        setEventsList(appointmentsCalendarWithTitles)
      }
    })
    .finally(() => setLoading(false))
  }, [])

  // Esto convierte al formato que necesita el calendario
  // new Date(la fecha).toISOString()

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleDateClick = (e) => {
  //   console.log(e.date); // Fecha formato largo
  //   console.log(e.dateStr); // Fecha formato string yyyy-mm-dd
  }

  function handleEventOnClick(eventInfo) {
    const date = new Date(eventInfo.el.fcSeg.eventRange.range.start);
    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    setModalData({
      id: eventInfo.el.fcSeg.eventRange.def.id,
      title: eventInfo.event._def.extendedProps.name,
      date: `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`,
      description: eventInfo.event._def.extendedProps.note,
    })
    handleOpenModal()
  }

  return (
        <div className="calendar-box">
          {
            openModal && <Modal 
              setter={handleOpenModal} 
              isOpen={openModal} 
              onClose={setOpenModal} 
              title={modalData.title} 
              description={modalData.description} 
              date={modalData.date} 
            />
          }
          {
            loading ? <div className="spinner-centered"><Spinner /></div>
            :
            <FullCalendar 
              events={eventsList}
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
              // weekends={false} // Quita los fines de semana
            />
          }
        </div>
  )
}

export default MyCalendar