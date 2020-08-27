import React from 'react';
import {defaultName} from '../const';
import {getDateFormat} from '../utils';
import { Link } from 'react-router-dom';

const Details = (props) =>{
  const {data, activeYear} = props; 

  const names = Object.keys(data[0]);  

  return (<>
    <Link className="go-back" to="/">&lt; Вернуться назад</Link>
    <h2 className="details-header">Детальная информация</h2>

    <div className="details-container">
    <table className="details" border="1">
      <tbody>      
        <tr className="details__row">
          {names.map((name)=><th className="details__title" key={name}>{name}</th>)}
        </tr>

        <tr className="details__row" >
          <td colspan={names.length}>По выбранному</td>
        </tr>

        <tr className="details__row" >
          <td colspan={names.length}>___</td>
        </tr>

        <tr className="details__row" >
          <td colspan={names.length}>По всем полетам</td>
        </tr>

        {data.map((flight)=>
          <tr className="details__row" key={flight.timeWork}>
            <td className="details__item" >{getDateFormat(flight.dateFlight)}</td>
            <td className="details__item" >{flight.timeWork}</td>
            <td className="details__item" >{flight.timeFlight}</td>
            <td className="details__item" >{flight.timeBlock}</td>
            <td className="details__item" >{flight.timeNight}</td>
            <td className="details__item" >{flight.timeBiologicalNight}</td>
            <td className="details__item" >{flight.flight}</td>
            <td className="details__item" >{flight.pinType}</td>
            <td className="details__item" >{flight.pin}</td>
            <td className="details__item" >{flight.type}</td>
            <td className="details__item" >{flight.takeoff.name}</td>
            <td className="details__item" >{flight.landing.name}</td>
          </tr>
        )}
        
      </tbody>
    </table>

    </div>
    
    </>
  );
}

export default Details;
