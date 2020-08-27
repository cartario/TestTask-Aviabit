import React from 'react';
import {flights} from '../mock.js';
import Card from './card.jsx';
import {getFlightsByActive, getUniqYears} from '../utils';
import {defaultName} from '../const';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: `Все года`,
    };
  }

  render(){
    return (
      <main className="main">
        <h1 className="main__title">
          Информация по налету командира воздушного судна за 
          {this.state.value === defaultName ? ` всë время` : ` ${this.state.value} год`}
        </h1>
        <div className="main__input-container">          
          <input className="main__input" type="checkbox" id="checkbox"/>
          <label className="main__label" htmlFor="checkbox">По факту</label>
        </div>
        <div className="main__container">
          <select value={this.state.value} className="main__select" onChange={(e)=>{this.setState({value: e.target.value})}}>
            <option>
              {defaultName}
            </option>
            {getUniqYears(flights).map((year) => <option key={year}>
              {year}
            </option>)}
          </select>
          <ul className="main__list">
          
            <li className="main__item">
              TimeBlock
            </li>
            <li className="main__item">
              TimeWork, с
            </li>
            <li className="main__item">
              TimeFlight, с
            </li>            
          </ul> 
        </div>
        {getFlightsByActive(flights, this.state.value).map((data)=>
        <Card 
          key={data.dateFlight}
          data={data}
          activeYear={this.state.value}
          />)}        
      </main>
    );
  }
}

export default Main;
