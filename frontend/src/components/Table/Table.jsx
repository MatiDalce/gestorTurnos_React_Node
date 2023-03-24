import React from 'react'
import './table.css'

const Table = ({
  headers, // Array de strings
  content, // Array de objetos
}) => {

  return (
    <div className="table-container">
      <div className='table-table' >
        <div className="table-headers">
          {
            headers.map((header, idx) => {
              return <p key={idx} className='table-header'>{header}</p>
            })
          }
        </div>
        <div className="table-content">
          <ul className="table-content-list">
            {
              content.map((cont, idx) => {
                return <div key={idx} className='table-cell'>
                  <div className="table-data">
                    {cont.name}
                  </div>
                  <div className="table-data">
                    {cont.dni}
                  </div>
                  <div className="table-data">
                    {cont.email}
                  </div>
                </div>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Table