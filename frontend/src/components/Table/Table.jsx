import React from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './table.css'

const Table = ({
  headers, // Array de strings
  content, // Array de objetos
  staticPath, // Parte de la ruta a la que va a redirigir
}) => {
  let navigate = useNavigate();

  const renderHeading = ([key, value]) => {
    return <th className="table__heading" role="columnheader" key={key}>
      {value}
    </th>
  };

  const renderHead = () => (
    <thead className="table__head">
      <tr className="table__row" role="row">
        {Object.entries(headers).map(renderHeading)}
      </tr>
    </thead>
  );

  const renderRow = row => {
    return <tr className="table__row" role="row" key={row.id} onClick={staticPath ? () => navigate(`${staticPath}/${row.id}`) : () => {}}>
      {Object.entries(headers).map(([key, value]) => (
        <td className="table__cell" role="cell" data-label={value} key={key}>
          {row[key]}
        </td>
      ))}
    </tr>
  };

  const renderBody = () => (
    <tbody className="table__body">{content.map(renderRow)}</tbody>
  );

  return (
    <table className="table" role="table">
      { renderHead() }
      { renderBody() }
    </table>
  );
}

export default Table