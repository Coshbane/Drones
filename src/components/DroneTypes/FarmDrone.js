import React from 'react';

const FarmType = (props) => {
  return (
    <div className='card'>
      <button type="button" onClick={props.doWhatEver}>{props.title}</button>
    </div>
  )
}


export default FarmType;
