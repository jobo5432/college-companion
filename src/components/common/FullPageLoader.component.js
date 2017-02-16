import React from 'react';
import gears from '../../static/gears.svg';


export default function FullPageLoader(){
  return(
    <div className="full-cover-bg">
      <div className="loading-container">
        <div><img src={gears} /></div>
        <div className="txt">Loading. Please wait...</div>

      </div>
    </div>
  );
}