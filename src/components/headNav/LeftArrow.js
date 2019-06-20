import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className='backArrow' onClick={props.prevArrow}>
      <i class="fas fa-chevron-left"></i>
    </div>
  )
}

export default LeftArrow;
