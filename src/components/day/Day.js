import React from 'react';
import './styles.css';

const Day = ({ date, holiday }) => {
  console.log(holiday)
  return(
    <div className="Day">
      <h3>{date}</h3>
      <p>{holiday.length ? holiday[0].holiday : ''}</p>
    </div>
  )
}

export default Day;