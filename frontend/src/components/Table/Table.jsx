import React from 'react'
import { useNavigate } from 'react-router-dom';
import './table.css'

const Table = ({
  headers, // Array de strings
  content, // Array de objetos
  staticPath,
}) => {
  let navigate = useNavigate();

  // Obtengo los keys (y su cantidad) existentes en los objetos.
  const columns = Object.keys(content[0]);

  // Devuelvo las cabeceras
  const header = headers.map((column) => (
    <div key={column}>{column}</div>
  ));

  // Devuelvo las filas
  const rows = content.map((row, index) => {

    // Color de fila
    // let colorRow = {
    //   backgroundColor: index % 2 === 0 ? 'var(--white-bg)' : 'var(--gray-bg)',
    // };

    const cells = columns.map((column) => (
      <p className='table-cell' key={column}>{row[column]}</p>
    ));
    return <div 
      key={index} 
      /* style={colorRow} */ 
      className='table-row' 
      onClick={ () => navigate(`${staticPath}/${cells[0].props.children}`) }
    >{cells}</div>
  });

  return (
    <div className="table-container">
      <div className="headers">
        {
          headers.length > 0 ? header : ''
        }
      </div>
      <div className="table">
          {
            content.length > 0 ? rows : ''
          }
      </div>
    </div>
  );
}

export default Table