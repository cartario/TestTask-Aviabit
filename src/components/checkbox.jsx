import React from 'react';

const Checkbox = (props) => {
  const {isFactData} = props;
  return (
    <div className="checkbox-container">          
      <input className="checkbox" type="checkbox" id="checkbox" onChange={props.toggleHandler} autoFocus checked={isFactData}/>
      <label className="checkbox__label" htmlFor="checkbox">По факту</label>
    </div> 
  );
};

export default Checkbox;
