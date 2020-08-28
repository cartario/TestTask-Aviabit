import React from 'react';

const Checkbox = (props) => {
  return (
    <div>          
      <input className="checkbox" type="checkbox" id="checkbox" onChange={props.toggleHandler} autoFocus/>
      <label className="checkbox__label" htmlFor="checkbox">По факту</label>
    </div> 
  );
};

export default Checkbox;
