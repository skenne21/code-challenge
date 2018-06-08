import React from 'react';
import Day from '../day/Day.js';
import './styles.css';

const WeekDay = ({ dayOfWeek, day, month, holidays }) => {
  

  // this method creates a day for each day in the weekDay
  const createDays = () => {
    
    // If the dayOfWeek array does not start with the this first day of the month empty days are created to make the calendar fill the right order
    if (dayOfWeek.length) {
      if(dayOfWeek[0].dayOfWeek < 5) {
        const emptyDay = {
          dayOfWeek: dayOfWeek[0].dayOfWeek,
          dateOfDay: ' '
        }
        
        // the empty day is added to the array to create an extra day for the week. 
        dayOfWeek.unshift(emptyDay);
      }
    }
    
    return dayOfWeek.map( (day, index) => {
      // each day in the week is looped over and creates a new day for the calendar
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

  // this method determines if a holiday is associated with the day of the week
  const determineHoliday = (date) => {
    let holidayMonth = month+1;
    const currentHolidays = holidays.filter(holiday => holiday.month === holidayMonth)
    return currentHolidays.filter( holiday => holiday.date === date);
  }

  return(
    <div className="WeekDay">
      <h2 className="day-week">{ day }</h2>
      { createDays() }
    </div>
  )

}

export default WeekDay;