import React from 'react';
import Day from '../day/Day.js';

const WeekDay = ({ dayOfWeek, day }) => {
  
  const createDays = () => {
    console.log(dayOfWeek)
  }

  return(
    <div className="WeekDay">
      { createDays() }
    </div>
  )

}

export default WeekDay;