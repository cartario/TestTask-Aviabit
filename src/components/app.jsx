import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import '../sass/app.scss';
import '../App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Details from './details';
import {flights} from '../mock'

const App = () => {
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

export default App;
