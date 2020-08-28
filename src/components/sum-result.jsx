import React from 'react';

const SumResult=(props) => {
  const {filteredFlights, setSumData} = props;
  const a= filteredFlights.map((it)=>it.timeWork).reduce((a,b)=>{return a+b},0);
  const b= filteredFlights.map((it)=>it.timeFlight).reduce((a,b)=>{return a+b},0);
  const c= filteredFlights.map((it)=>it.timeBlock).reduce((a,b)=>{return a+b},0);
  const d= filteredFlights.map((it)=>it.timeNight).reduce((a,b)=>{return a+b},0);
  const e= filteredFlights.map((it)=>it.timeBiologicalNight).reduce((a,b)=>{return a+b},0);

  const sumData = ({
    timeWork: a,
    timeFlight: b,
    timeBlock: c,
    timeNight: d,
    timeBiologicalNight: e,
  });
  
  setSumData(sumData);

  return (
    <tr className="details__row">
      <td className="details__item" >{`Итого`}</td>
      <td className="details__item" >{a}</td>
      <td className="details__item" >{b}</td>
      <td className="details__item" >{c}</td>
      <td className="details__item" >{d}</td>
      <td className="details__item" >{e}</td>
      <td className="details__item" >---</td>
      <td className="details__item" >---</td>
      <td className="details__item" >---</td>
      <td className="details__item" >---</td>
      <td className="details__item" >---</td>
      <td className="details__item" >---</td>
    </tr>
  );
}

export default SumResult;
