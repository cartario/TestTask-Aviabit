import {defaultName} from './const';

export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const getUniqYears = (flights, isFactData) => {
  return [...new Set(flights
    .filter((flight)=>isFactData ? flight.type === 0 : flight.type === 1)
    .map((flight)=>flight.dateFlight.getFullYear())
    .sort((a,b)=> b-a))];
};

export const getUniq = (arr) => {
  return [...new Set(arr)];
};

export const getYears = (flights) => {
  return flights.map((flight)=>flight.dateFlight.getFullYear());
};

export const getMonthsByYear = (flightsByFact, year) => {
  return flightsByFact
    .filter((flight) => flight.dateFlight.getFullYear() === Number(year))
    .map((flight)=>getMonthName(flight.dateFlight.getMonth()));
};

export const getUniqValues = (flights, isYear = false) => {  
  const list = flights
    .map((flight)=>{
      let result;
      isYear ? result = flight.dateFlight.getFullYear() : result = flight.dateFlight.getMonth();
      return result;
    });
  return [...new Set(list)];
};

export const getDateFormat = (date) => {
  return `${date.getDate()} ${getMonthName(date.getMonth())} ${date.getFullYear()}`;
};

export const getMonthName = (value) => [`ЯНВ`,`ФЕВ`,`МАР`,`АПР`,`МАЙ`,`ИЮН`,`ИЮЛ`,`АВГ`,`СЕН`,`ОКТ`,`НОЯ`,`ДЕК`][value];

export const getRandomInt = (min, max)=> {  
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getCurrentFlights = (flights, year, value, isFactData) => {
  
  let currentFlights;
  switch (true) {  
    case year===defaultName:        
    currentFlights = flights
      .filter((flight)=> (flight.dateFlight.getFullYear()===Number(value))&&(flight.type===(isFactData? 0 : 1)));
      return currentFlights;
  
    default:          
    currentFlights = flights
        .filter((flight)=>
        (flight.type===(isFactData? 0 : 1))&&(flight.dateFlight.getFullYear()===Number(year))
        &&(getMonthName(flight.dateFlight.getMonth())===value)); 
        
      return currentFlights;        
  };
};

export const adapter = (data) => ({
  dateFlight: new Date(),
  flight: `ОТВЕТ_СЕРВЕРА`,
  pinType: `ОТВЕТ_СЕРВЕРА`,
  pin: `ОТВЕТ_СЕРВЕРА`,
  timeFlight: 11111,
  timeBlock: 11111,
  timeNight: 11111,
  timeBiologicalNight: 11111,
  timeWork: 11111,
  type: 0,
  takeoff: {
    name: `ОТВЕТ_СЕРВЕРА`,
    lat: 56.55,
    long: 85.2,
  },
  landing: {
    name: `ОТВЕТ_ОТ_СЕРВЕРА`,
    lat: 11.99805555,
    long: 109.21944444,
  },
});

export const getFlightsByFact = (flights, isFactData) => {
  return flights.filter((flight)=> isFactData ? flight.type === 0 : flight.type === 1);
};

export const sum = (flights, type)=>{
  return flights.map((flight)=>flight[type]).reduce((a,b)=>a+b);
};
