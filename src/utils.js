export const getUniqYears = (flights) => {
  const yearsList = flights
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

export const getMonthName = (value) => [`ЯНВ`,`ФЕВ`,`МАР`,`АПР`,`МАЙ`,`ИЮН`,`ИЮЛ`,`АВГ`,`СЕН`,`ОКТ`,`НОЯ`,`ДЕК`][value];
