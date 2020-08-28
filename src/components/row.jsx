import React from 'react';
import {getDateFormat} from '../utils';

const Row=(props)=> {
  const {flight} = props;
  return (
    <tr className="details__row">
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
  );
};

export default Row;
