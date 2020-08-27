import {defaultName} from './const';
import {getUniqValues} from './utils.js';


export const getFlightsByActive = (flights, state) => {
  const flightsCopy = flights.slice();
  const flightsByYear = flightsCopy.filter((flight)=> flight.dateFlight.getFullYear() === Number(state));

  const getSum = (value, type) => {    
    const sum = flightsCopy
    .filter((flight)=> {
      let result;
      value > 12 ? result = flight.dateFlight.getFullYear() : result = flight.dateFlight.getMonth();      
      return result === value;
    })
    .map((it)=> it[type])
    .reduce((a, b)=>{
      return a + b;
    });
    return sum;
  };

  const getFilteredFlights = (isYear = false) => {
    let goalArr;
    isYear ? goalArr = flightsCopy : goalArr = flightsByYear;
    return Array.from(getUniqValues(goalArr, isYear)).map((value) => {    
      return {
        dateFlight: goalArr.find((flight)=> {
          let result;
          isYear ? result = flight.dateFlight.getFullYear() : result = flight.dateFlight.getMonth();
          return result===value;
        }).dateFlight,
        timeWork: getSum(value, `timeWork`),
        timeFlight: getSum(value, `timeFlight`),
        timeBlock: getSum(value, `timeBlock`),
      };
    });
  };

  if(state === defaultName){
    return getFilteredFlights(true);
  }
  console.log(getFilteredFlights(false))
  return getFilteredFlights(false).reverse();
};