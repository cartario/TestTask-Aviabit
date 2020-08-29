import React from 'react';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import {names} from '../const';

const Chart = (props) => {
  const {currentFlights} = props;

  const sum = names
    .slice(1,6)
    .map((name)=> currentFlights
      .map((flight)=>flight[name])
      .reduce((a,b)=>{return a+b},0));

  const state = {
    labels: [`timeWork`,`timeFlight`,`timeBlock`,`timeNight`,`timeBiologicalNight`],
    datasets: [
      { 
        barPercentage: 0.5,
         
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: sum,
      }
    ]
  };

  return (
    <div className="chart-container">      
    <Bar       
      data={state}
      options={{
        title:{
          display: true,
          text:'Сводные данные за текущий период',
          fontSize: 20
        },
        legend:{
          display:false, 
        },        
      }}
    />
  </div>
  );
};

const mapStateToProps = (state) => ({
  sumData: state.FLIGHTS.sumData,
});

export {Chart};
export default connect(mapStateToProps)(Chart)
