import React from 'react';
import {defaultName, names} from '../const';
import {getRandomInt, getCurrentFlights} from '../utils';
import { Link } from 'react-router-dom';
import Chart from './chart';
import SumResult from './sum-result';
import Row from './row';
import Checkbox from './checkbox';
import withSum from '../hocs/withSum';

const Details = (props) =>{
  const {flights, activeFlight, isFactData, setSumData, toggleHandler} = props;
  const {value, year} = activeFlight;

  const filteredFlights = getCurrentFlights(flights, year, value, isFactData);

  return (
    <>
      <Link className="go-back" to="/">&lt; Вернуться назад</Link>
      <h2 className="details-header">
        Детальная информация 
        {`${value ? ` за ${value}`: ``} ${year === defaultName 
          ? `` : year} . Данные по ${isFactData 
          ? `фактическим`
          : `плановым`} рейсам`}
      </h2>

      <Checkbox toggleHandler = {toggleHandler} isFactData={isFactData}/>
      <Chart />
      
      <div className="details-container">
        <table className="details" border="1">
          <tbody>      
            <tr className="details__row">
              {names.map((name)=><th className="details__title" key={name}>{name}</th>)}
            </tr>
            <tr className="details__row" >
              <td className="details__item details__item--section" colSpan={names.length}>По выбранному</td>
            </tr>
            {filteredFlights.map((flight)=>
              <Row key={getRandomInt(1,1000000)} flight={flight}/>
            )}
            <tr className="details__row" >
              <td className="details__item details__item--section" colSpan={names.length}>Суммарно за {value}</td>
            </tr>
            <SumResult 
              filteredFlights={filteredFlights} 
              setSumData={setSumData}
            />
            <tr className="details__row" >
              <td className="details__item details__item--section" colSpan={names.length}>По всем полетам</td>
            </tr>
            {flights.sort((a,b)=>b.dateFlight - a.dateFlight).map((flight)=>
              <Row key={getRandomInt(1,1000000)} flight={flight}/>
            )}        
          </tbody>
        </table>
      </div>   
    </>
  );
}

export default withSum(Details);
