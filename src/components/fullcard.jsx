import React from 'react';
import {defaultName} from '../const';
import {getDateFormat} from '../utils';
import { Link } from 'react-router-dom';

const FullCard = (props) =>{
  const {data, activeYear} = props; 

  const names = Object.keys(data[0]);
  

  return (<>
    <Link to="/">Вернуться назад</Link>
    <div className="table-container">
    <table className="table" border="1">
      <tbody>      
        <tr className="table__row">
          {names.map((name)=><th className="table__title" key={name}>{name}</th>)}
        </tr>

        {data.map((flight)=>
          <tr className="table__row" key={flight}>
            <td className="table__item" >{getDateFormat(flight.dateFlight)}</td>
            <td className="table__item" >{flight.timeWork}</td>
            <td>{flight.timeFlight}</td>
            <td>{flight.timeBlock}</td>
            <td>{flight.timeNight}</td>
            <td>{flight.timeBiologicalNight}</td>
            <td>{flight.flight}</td>
            <td>{flight.pinType}</td>
            <td>{flight.pin}</td>
            <td>{flight.type}</td>
            <td>{flight.takeoff.name}</td>
            <td>{flight.landing.name}</td>
          </tr>
        )}
        
      </tbody>
    </table>

    </div>
    
    </>
  );
}

export default FullCard;
