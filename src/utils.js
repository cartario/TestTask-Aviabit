import {defaultName} from './const';

export const getFlightsByActive = (arr, state) => {  
  if(state === defaultName){
    return arr;
  } 
  return arr.filter((flight)=> flight.dateFlight.getFullYear() === Number(state));
};

export const getUniqYears = (flights) => {
  const yearsList = flights
    .map((flight)=>flight.dateFlight.getFullYear());
  return [...new Set(yearsList)];
};

export const getMonthName = (value) => [`ЯНВ`,`ФЕВ`,`МАР`,`АПР`,`МАЙ`,`ИЮН`,`ИЮЛ`,`АВГ`,`СЕН`,`ОКТ`,`НОЯ`,`ДЕК`][value];
