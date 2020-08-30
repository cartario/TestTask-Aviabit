import React from 'react';
import PropTypes from "prop-types";
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
  const {flights, activeFlight, setActiveFlight, toggleHandler, isFactData, setCurrentFlights, currentFlights} = props;

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
            setCurrentFlights={setCurrentFlights}
          />  
        </Route>
        <Route path="/details">
          <Details 
            flights = {flights}
            activeFlight = {activeFlight}          
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
  
  setCurrentFlights: (value, year, isFactData) => {
    dispatch(ActionCreator.setCurrentFlights(value, year, isFactData));
  },
});

App.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      dateFlight: PropTypes.instanceOf(Date).isRequired,
      flight: PropTypes.string.isRequired,
      pinType: PropTypes.string.isRequired,
      pin: PropTypes.string.isRequired,
      timeFlight: PropTypes.number.isRequired,
      timeBlock: PropTypes.number.isRequired,
      timeNight: PropTypes.number.isRequired,
      timeBiologicalNight: PropTypes.number.isRequired,
      timeWork: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
      takeoff: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        long: PropTypes.number.isRequired,
      }).isRequired,
      landing: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lat: PropTypes.number.isRequired,
        long: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  ),
  setActiveFlight: PropTypes.func.isRequired,
  isFactData: PropTypes.bool.isRequired,
	toggleHandler: PropTypes.func.isRequired,
  setCurrentFlights: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(withToggle(App));
