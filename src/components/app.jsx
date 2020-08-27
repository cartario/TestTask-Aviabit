import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import '../sass/app.scss';
import '../App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Details from './details';
import {flights} from '../mock'
import { connect } from 'react-redux';
import {ActionCreator, Operation} from '../reducer.js';

const App = (props) => {
  
  return (
    
    <div className="App">
      <HashRouter >        
          <Header/>
          <Route exact path="/">
            <Main/>  
          </Route>
          <Route path="/details">
            <Details data = {flights}/>
          </Route>
          <Footer/>
      </HashRouter>
    </div>    
  );
}

const mapStateToProps = (state) => ({
  flights: state.FLIGHTS.flights,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveFlight: () => {
    dispatch(ActionCreator.setActiveFlight());    
  },


});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
