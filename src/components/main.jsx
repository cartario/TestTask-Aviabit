import React from 'react';
import Card from './card.jsx';
import {getUniqYears} from '../utils';
import {getFlightsByActive} from '../reducer';
import {defaultName} from '../const';
import Checkbox from './checkbox';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: defaultName,      
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(value){    
    this.props.setActiveFlight(value, this.state.value, this.props.isFactData);    
    this.props.setCurrentFlights(value, this.state.value, this.props.isFactData);
  }

  render(){
    return (
      <main className="main">
        <h1 className="main__title">
          Информация по налету командира воздушного судна за 
          {this.state.value === defaultName ? ` всë время` : ` ${this.state.value} год`}
          <div>Данные по {this.props.isFactData ? `выполненным`:`плановым`} рейсам</div>
        </h1>

        <Checkbox toggleHandler={this.props.toggleHandler} isFactData={this.props.isFactData}/>

        <div className="main__container">
          <select value={this.state.value} className="main__select" onChange={(e)=>{this.setState({value: e.target.value})}}>
            <option>
              {defaultName}
            </option>
            {getUniqYears(this.props.flights, this.props.isFactData).map((year) => <option key={year}>
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
        {getFlightsByActive(this.props.flights, this.state.value, this.props.isFactData).sort((a,b)=>b.dateFlight - a.dateFlight).map((data)=>
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
