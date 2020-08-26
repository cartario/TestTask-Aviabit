import React from 'react';
import {defaultName} from '../const';
import {getMonthName} from '../utils';

const Card = (props) =>{
  const {data, activeYear} = props;  
  const {dateFlight, flight, timeWork, timeFlight} = data;

  return (
    <ul className="main__card card">
      <li className="card__item">
        {activeYear === defaultName ? dateFlight.getFullYear() : getMonthName(dateFlight.getMonth())}
      </li>
      <li className="card__item">
        {flight}
      </li>
      <li className="card__item">
        {timeWork}
      </li>
      <li className="card__item">
        {timeFlight}
      </li>            
    </ul>  
  );
}

export default Card;
