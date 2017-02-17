import React, {PropTypes} from 'react';
import camera from '../../static/camera.svg';

const Card = props => {
  let indicatorClass = `card-type-indicator ${props.indicatorStyle}`;
  let icon = '';

  switch(props.indicatorStyle){
    case 'property':
      icon = 'fa fa-home';
      break;
    case 'school-supplies':
      icon = 'fa fa-graduation-cap';
      break;
    case 'other':
      icon = 'fa fa-gift';
      break;
  }

  return (
    <div className="card">
      <div className="image-container">
        <img src={camera} alt="Avatar"/>
      </div>
      <div className="card-container">
        <div className={indicatorClass}><i className={icon} /></div>
        <div className="content">
          <div><strong>[{props.indicatorStyle}]</strong></div>
          <div>[{icon}]</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  indicatorStyle: PropTypes.string.isRequired
};

export default Card;