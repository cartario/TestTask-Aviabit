import React from 'react';
import {defaultName} from '../const';
import {getDateFormat, getMonthName, getRandomInt} from '../utils';
import { Link } from 'react-router-dom';
const names = [`dateFlight`,`timeWork`,`timeFlight`,`timeBlock`,`timeNight`,`timeBiologicalNight`,`flight`,`pinType`,`pin`,`type`,`takeoff`,`landing`]; 

export const Row=(props)=> {
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

export const SumFlight=(props) => {
  const {filteredFlights} = props;
  const a= filteredFlights.map((it)=>it.timeWork).reduce((a,b)=>{return a+b},0);
  const b= filteredFlights.map((it)=>it.timeFlight).reduce((a,b)=>{return a+b},0);
  const c= filteredFlights.map((it)=>it.timeBlock).reduce((a,b)=>{return a+b},0);
  const d= filteredFlights.map((it)=>it.timeNight).reduce((a,b)=>{return a+b},0);
  const e= filteredFlights.map((it)=>it.timeBiologicalNight).reduce((a,b)=>{return a+b},0);
  return (
    <tr className="details__row">
            <td className="details__item" >{`Итого`}</td>
            <td className="details__item" >{a}</td>
            <td className="details__item" >{b}</td>
            <td className="details__item" >{c}</td>
            <td className="details__item" >{d}</td>
            <td className="details__item" >{e}</td>
            <td className="details__item" >---</td>
            <td className="details__item" >---</td>
            <td className="details__item" >---</td>
            <td className="details__item" >---</td>
            <td className="details__item" >---</td>
            <td className="details__item" >---</td>
          </tr>
  );
}

const Details = (props) =>{
  const {data, activeFlight} = props;
  const {value, year, isFactData} = activeFlight;
  let filteredFlights;

  const getFilteredFlights = (year) => {
    switch (true) {  
      case year===defaultName:        
        filteredFlights = data
        .filter((flight)=> (flight.dateFlight.getFullYear()===Number(value))&&(flight.type===(isFactData? 1:0)));
        return filteredFlights;
    
      default:          
          filteredFlights = data
          .filter((flight)=>
          (flight.type===(isFactData? 1:0))&&(flight.dateFlight.getFullYear()===Number(year))
          &&(getMonthName(flight.dateFlight.getMonth())===value)); 
        return filteredFlights;        
      };
  }

  getFilteredFlights(year);
 




  return (<>
    <Link className="go-back" to="/">&lt; Вернуться назад</Link>
  <h2 className="details-header">Детальная информация за {`${activeFlight.value} ${activeFlight.year} фактически?-${activeFlight.isFactData}`}</h2>

    <div className="details-container">
    <table className="details" border="1">
      <tbody>      
        <tr className="details__row">
          {names.map((name)=><th className="details__title" key={name}>{name}</th>)}
        </tr>

        <tr className="details__row" >
          <td colSpan={names.length}>По выбранному</td>
        </tr>

        {filteredFlights.map((flight)=>
          <Row key={getRandomInt(1,1000000)} flight={flight}/>
        )}

        <tr className="details__row" >
          <td colSpan={names.length}>Суммарно за {value}</td>
        </tr>

        <SumFlight filteredFlights={filteredFlights}/>        

        <tr className="details__row" >
          <td colSpan={names.length}>По всем полетам</td>
        </tr>

        {data.sort((a,b)=>b.dateFlight - a.dateFlight).map((flight)=>
          <Row key={getRandomInt(1,1000000)} flight={flight}/>
        )}
        
      </tbody>
    </table>

    </div>
    
    </>
  );
}

export default Details;
