import React from 'react';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';

const Chart = (props) => {
  const {sumData} = props;

  const state = {
    labels: [`timeWork`,`timeFlight`,`timeBlock`,`timeNight`,`timeBiologicalNight`],
    datasets: [
      { 
        barPercentage: 0.5,
         
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: Object.values(sumData),
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
