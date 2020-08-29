import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import '../sass/app.scss';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Details from './details';

import { connect } from 'react-redux';
import {ActionCreator} from '../reducer.js';

import withToggle from '../hocs/withToggle';

const App = (props) => {
  const {flights, activeFlight, setActiveFlight, toggleHandler, isFactData, setSumData, setFilteredFlights, currentFlights} = props;

  return (    
    <div className="App">
      <HashRouter >        
        <Header/>
        <Route exact path="/">
          <Main
            setActiveFlight = {setActiveFlight}
            toggleHandler = {toggleHandler}
            isFactData = {isFactData}
            flights = {flights}
            setSumData = {setSumData}
            setFilteredFlights={setFilteredFlights}
          />  
        </Route>
        <Route path="/details">
          <Details flights = {flights}
          activeFlight = {activeFlight}
          toggleHandler = {toggleHandler}
          isFactData = {isFactData}
          currentFlights= {currentFlights}
          />
        </Route>
        <Footer/>
      </HashRouter>
    </div>    
  );
}

const mapStateToProps = (state) => ({
  flights: state.FLIGHTS.flights,
  activeFlight: state.FLIGHTS.activeFlight,
  currentFlights: state.FLIGHTS.currentFlights,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFlight: (value, year, isFactData) => {
    dispatch(ActionCreator.setActiveFlight(value, year, isFactData));    
  },
  setSumData: (sumData) => {
    dispatch(ActionCreator.setSumData(sumData));
  },
  setFilteredFlights: (value, year, isFactData) => {
    dispatch(ActionCreator.setFilteredFlights(value, year, isFactData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(withToggle(App));
