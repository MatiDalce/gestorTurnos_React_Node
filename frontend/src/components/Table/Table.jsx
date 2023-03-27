import React from 'react'
import { useNavigate } from 'react-router-dom';
import './table.css'

const Table = ({
  headers, // Array de strings
  content, // Array de objetos
  contentDisplay, // Array que dice qué datos mostrar en las celdas (Para que sea igual que los headers)
  staticPath, // Parte de la ruta a la que va a redirigir
  headerBg,
  noClickable,
  textColor,
  noTableBorders,
  noCursor,
  noSticky,
  separatorsColor,
  tableWidth
}) => {
  let navigate = useNavigate();

  const tableContainerStyle = {
    borderLeft: noTableBorders ? 'none' : '3px solid var(--skyblue-bg)',
    borderRight: noTableBorders ? 'none' : '3px solid var(--skyblue-bg)',
    width: tableWidth ? tableWidth : '70%'
  }

  const headersStyle = {
    backgroundColor: headerBg ? headerBg : 'var(--white-bg)',
    color: textColor ? textColor : 'var(--black-bg)',
    headerPosition: noSticky ? '' : 'sticky'
  }

  const tableRowStyle = {
    border: separatorsColor ? separatorsColor : '2px solid var(--skyblue-bg)', 
    cursor: noCursor ? '' : 'pointer',
  }

  const rowsStyle = {
    color: textColor ? textColor : 'var(--black-bg)', 
  }
  
  // Si esta vacío...
  if(content.length === 0) {
    return <p>Obteniendo los datos...</p>
  } else { // Si no...

    // Obtengo los keys (y su cantidad) existentes en los objetos.
    const columns = Object.keys(content[0]);
    
    // Devuelvo las cabeceras
    const header = headers.map((column) => (
      <div key={column}>{column}</div>
    ));

    // Devuelvo las filas
    const rows = content.map((row, index) => {

      // Color de fila alternada
      // let colorRow = {
      //   backgroundColor: index % 2 === 0 ? 'var(--white-bg)' : 'var(--gray-bg)',
      // };

      const cells = contentDisplay.map(allowedData => {
        return columns.map((column) => {
          return allowedData === column ? <p className='table-cell' key={column}>{row[column]}</p> : null
        });
      })

      console.log(cells);
      return <div 
        key={index} 
        /* style={colorRow} */ 
        className='table-row'
        style={tableRowStyle}
        onClick={ noClickable ? () => {} : () => navigate(`${staticPath}/${cells[0][0].props.children}`) }
      >
        {cells}
      </div>
    });

    return (
      <div className="table-container" style={tableContainerStyle}>
        <div className="headers" style={headersStyle}>
          {
            headers.length > 0 ? header : ''
          }
        </div>
        
        {
          content.length > 0 && <div className="table" style={rowsStyle}>
          {
            content.length > 0 ? rows : []
          }
      </div>
        }
        
      </div>
    );
  }

}

export default Table