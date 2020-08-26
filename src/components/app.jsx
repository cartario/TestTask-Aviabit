import React from 'react';
import '../sass/app.scss';
import '../App.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
