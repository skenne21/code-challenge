import React from 'react';

const Day = ({ date, holiday }) => {
  console.log(holiday)
  return(
    <div>
      <h3>{date}</h3>
      <p>{holiday.length ? holiday[0].holiday : ''}</p>
    </div>
  )
}

export default Day;