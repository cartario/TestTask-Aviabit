import {defaultName} from './const';

export const getUniqYears = (flights) => {
  const yearsList = flights
    .map((flight)=>flight.dateFlight.getFullYear());
  return [...new Set(yearsList)];
};

export const getFlightsByActive = (arr, state) => {
  const arrCopy = arr.slice();

  const getSum = (value, type) => {    
    const sum = arrCopy
    .filter((flight)=> {
      return flight.dateFlight.getFullYear() === value;
    })
    .map((it)=> it[type])
    .reduce((a, b)=>{
      return a + b;
    });

    return sum;
  };

  const sumFilteredFlights = Array.from(getUniqYears(arrCopy)).map((year) => {    
    return {
      dateFlight: arrCopy.find((it)=> it.dateFlight.getFullYear()===year).dateFlight,
      timeWork: getSum(year, `timeWork`),
      timeFlight: getSum(year, `timeFlight`),
      timeBlock: getSum(year, `timeBlock`),
    };
  });

  console.log(sumFilteredFlights);
  

  if(state === defaultName){
    return sumFilteredFlights;
  } 
  return arrCopy.filter((flight)=> flight.dateFlight.getFullYear() === Number(state));
};

export const getMonthName = (value) => [`ЯНВ`,`ФЕВ`,`МАР`,`АПР`,`МАЙ`,`ИЮН`,`ИЮЛ`,`АВГ`,`СЕН`,`ОКТ`,`НОЯ`,`ДЕК`][value];
