import React from 'react';
import logo from './logo.svg';
import './sass/app.scss';
import './App.css';
import {mock} from './mock.js';

const Card = (props) =>{

  const isYear = true;

  const {data} = props;
  const {dateFlight, flight, timeWork, timeFlight} = data;

  return (<>

    <ul className="main__card card">
      <li className="card__item">
        {isYear ? dateFlight.getFullYear() : dateFlight.getMonth()}
      </li>
      <li className="card__item">
        {flight}
      </li>
      <li className="card__item">
        {timeWork}
      </li>
      <li className="card__item">
        {timeFlight}
      </li>            
    </ul> 
  </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="nav__logo">
            [Logo]
          </div>
          <div className="nav__menu">
            [Menu]
          </div>
        </nav>
      </header>
      <main className="main">
        <h1 className="main__title">
          Информация по налету командира воздушного судна
        </h1>
        <div className="main__input-container">          
          <input className="main__input" type="checkbox" id="checkbox"/>
          <label className="main__label" htmlFor="checkbox">По факту</label>
        </div>
        <div className="main__container">
          <select className="main__select">
            <option>
              Все года
            </option>
            <option>
              2020
            </option>
            <option>
              2019
            </option>
            <option>
              2018
            </option>
          </select>
          <ul className="main__list">
            <li className="main__item">
              Flight
            </li>
            <li className="main__item">
              TimeWork, с
            </li>
            <li className="main__item">
              TimeFlight, с
            </li>            
          </ul> 
        </div>
        {mock.map((data)=>
        <Card 
          key={data.dateFlight}
          data={data}/>)}        
      </main>
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__item">[Copyright]</li>
          <li className="footer__item">[Социальные сети]</li>
          <li className="footer__item">[Адрес]</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
