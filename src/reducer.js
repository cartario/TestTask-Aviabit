import {defaultName} from './const';
import {extend, adapter, getUniqValues, getMonthName} from './utils.js';
import {flights} from './mock';

export const getFlightsByActive = (flights, state, isFactData) => {
  const flightsByFact = flights.filter((flight)=>{
    return isFactData ? flight.type === 0 : flight.type === 1;     
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
    return getFilteredFlights(true);
  }  
  return getFilteredFlights(false).reverse();
};

const initialState = {
  flights: flights,
  activeFlight: {
    year: ``,
    value: ``,
    isFactData: ``,
  },
  sumData: {
    timeWork: 0,
    timeFlight: 0,
    timeBlock: 0,
    timeNight: 0,
    timeBiologicalNight: 0,
  },

  currentFlights: [],
};

const ActionType = {
  LOAD_FLIGHTS: `LOAD_FLIGHTS`,
  SET_ACTIVE_FLIGHT: `SET_ACTIVE_FLIGHT`,
  SET_SUM_DATA: `SET_SUM_DATA`,
  SET_CURRENT_FLIGHTS: `SET_CURRENT_FLIGHTS`,
};

export const ActionCreator = {
  loadFlights: (flights) => ({
    type: `LOAD_FLIGHTS`,
    payload: flights,
  }),
  setActiveFlight: (value, year, isFactData) => {    
    return ({
      type: `SET_ACTIVE_FLIGHT`,
      payload: {value: value, year: year, isFactData: isFactData},
    })
  },
  setSumData: (sumData) => ({
    type: ActionType.SET_SUM_DATA,
    payload: sumData,
  }),
  setFilteredFlights: (year, value, isFactData) => ({
    type: ActionType.SET_CURRENT_FLIGHTS,
    payload: {year: year, value: value, isFactData: isFactData},
  }),
};

export const Operation = {
  loadFlights: () => (dispatch, getState, api) => {
    return api.get(`/users?page=2`).then((response) => {      
      dispatch(ActionCreator.loadFlights(adapter(response.data.data)));      
    })
    .catch((err) => {      
      throw err;
    });
  }, 
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

  case ActionType.LOAD_FLIGHTS:
    return extend(state, {flights: [...state.flights, action.payload]});

  case ActionType.SET_ACTIVE_FLIGHT:    
    return extend(state, {activeFlight: action.payload});

  case ActionType.SET_SUM_DATA:    
    return extend(state, {sumData: action.payload});

  case ActionType.SET_CURRENT_FLIGHTS:        
        if(action.payload.value === defaultName){          
          const currentFlightsByDefaultName = state.flights
          .filter((flight)=> {            
            return (flight.dateFlight.getFullYear()===Number(action.payload.year))
            &&(flight.type===(action.payload.isFactData? 0 : 1))
          });
          return extend(state, {currentFlights: currentFlightsByDefaultName});
        } else {
          const currentFlights = state.flights
          .filter((flight)=> {            
            return (flight.dateFlight.getFullYear()===Number(action.payload.value))
            &&(getMonthName(flight.dateFlight.getMonth())===action.payload.year)
            &&(flight.type===(action.payload.isFactData? 0 : 1))
          });
          return extend(state, {currentFlights: currentFlights});
        }
    default:
      return state;
  }
};

