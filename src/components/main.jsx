import React from 'react';
// import {flights} from '../mock.js';
import Card from './card.jsx';
import {getUniqYears} from '../utils';
import {getFlightsByActive} from '../reducer';
import {defaultName} from '../const';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: `Все года`,
      isFactData: false,
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(value){    
    this.props.setActiveFlight(value, this.state.value, this.state.isFactData);
  }

  render(){
    return (
      <main className="main">
        <h1 className="main__title">
          Информация по налету командира воздушного судна за 
          {this.state.value === defaultName ? ` всë время` : ` ${this.state.value} год`}
        </h1>
        <div className="main__input-container">          
          <input className="main__input" type="checkbox" id="checkbox" onChange={()=>{this.setState({
            isFactData: !this.state.isFactData,
          })}}/>
          <label className="main__label" htmlFor="checkbox">По факту</label>
        </div>
        <div className="main__container">
          <select value={this.state.value} className="main__select" onChange={(e)=>{this.setState({value: e.target.value})}}>
            <option>
              {defaultName}
            </option>
            {getUniqYears(this.props.flights, this.state.isFactData).map((year) => <option key={year}>
              {year}
            </option>)}
          </select>
          <ul className="main__list">
          

            <li className="main__item">
              TimeWork, с
            </li>
            <li className="main__item">
              TimeFlight, с
            </li> 
            <li className="main__item">
              TimeBlock
            </li>           
          </ul> 
        </div>
        {getFlightsByActive(this.props.flights, this.state.value, this.state.isFactData).sort((a,b)=>b.dateFlight - a.dateFlight).map((data)=>
        <Card 
          key={data.dateFlight}
          data={data}
          activeYear={this.state.value}
          clickHandler = {this._clickHandler}
          />)}        
      </main>
    );
  }
}

export default Main;
