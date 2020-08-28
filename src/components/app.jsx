import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import '../sass/app.scss';
import '../App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Details from './details';

import { connect } from 'react-redux';
import {ActionCreator} from '../reducer.js';

import withToggle from './withToggle'

const App = (props) => {
  const {flights, activeFlight, setActiveFlight, toggleHandler, isFactData, setSumData} = props;
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
          />  
        </Route>
        <Route path="/details">
          <Details data = {flights}
          activeFlight = {activeFlight}
          toggleHandler = {toggleHandler}
          isFactData = {isFactData}
          setSumData = {setSumData}
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
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFlight: (value, year, isFactData) => {
    dispatch(ActionCreator.setActiveFlight(value, year, isFactData));    
  },
  setSumData: (sumData) => {
    dispatch(ActionCreator.setSumData(sumData));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(withToggle(App));
