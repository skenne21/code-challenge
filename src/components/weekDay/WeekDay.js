import React from 'react';
import Day from '../day/Day.js';

const WeekDay = ({ dayOfWeek, day, month, holidays }) => {
  
  const createDays = () => {
    return dayOfWeek.map( (day, index) => {
      return (
        <Day
          key={ index }
          date={ day.dateOfDay}
          holiday={ determineHoliday(day.dateOfDay)}
        >
        </Day>
      )
    })
  }

  const determineHoliday = (date) => {
    let holidayMonth = month+1;
    const currentHolidays = holidays.filter(holiday => holiday.month === holidayMonth)
    return currentHolidays.filter( holiday => holiday.date === date);
  }

  return(
    <div className="WeekDay">
      <h2>{ day }</h2>
      { createDays() }
    </div>
  )

}

export default WeekDay;