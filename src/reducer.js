import {defaultName} from './const';
import {getUniqValues} from './utils.js';


export const getFlightsByActive = (flights, state, isFactData) => {


  const flightsByFact = flights.filter((flight)=>{
    return isFactData ? flight.type === 1 : flight.type === 0;
     
  });

  const flightsCopy = flightsByFact.slice();

  const flightsByYear = flightsByFact.filter((flight)=> flight.dateFlight.getFullYear() === Number(state));

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
    console.log(getFilteredFlights(true));
    console.log(flightsByFact);
    console.log(flights);
    return getFilteredFlights(true);
  }
  
  return getFilteredFlights(false).reverse();
};