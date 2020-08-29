import React from 'react';
import {names} from '../const';

const SumResult=(props) => {
  const {currentFlights} = props;

  const sum = names
    .slice(1,6)
    .map((name)=> currentFlights
      .map((flight)=>flight[name])
      .reduce((a,b)=>{return a+b}, 0));

  return (
    <tr className="details__row">
      <td className="details__item" >{`Итого`}</td>
      {sum.map((item)=><td key={item.toString()} className="details__item" >{item}</td>)}
      {[1,2,3,4,5,6].map((item)=><td key={item} className="details__item" >___</td>)}      
    </tr>
  );
}

export default SumResult;
