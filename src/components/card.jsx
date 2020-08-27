import React from 'react';
import {defaultName} from '../const';
import {getMonthName} from '../utils';
import {Link} from 'react-router-dom';

const Card = (props) =>{
  const {data, activeYear} = props;  

  const {dateFlight, timeWork, timeFlight, timeBlock} = data;

  return (
    <ul className="main__card card">
      <li className="card__item">
        <Link onClick={(e)=>{props.clickHandler(e.target.textContent)}} to="/details">{activeYear === defaultName ? dateFlight.getFullYear() : getMonthName(dateFlight.getMonth())}</Link>
      </li>
      <li className="card__item">
        {timeBlock}
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
