export const extend = (oldData, newData) => {
  return Object.assign({}, oldData, newData);
};

export const getUniqYears = (flights, isFactData) => {

  const yearsList = flights.filter((flight)=>{
    return isFactData ? flight.type === 1 : flight.type === 0;
  })
    .map((flight)=>flight.dateFlight.getFullYear());
  return [...new Set(yearsList)];
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