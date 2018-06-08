import React, { Component } from 'react';

// this is the file that holds calendar information for two months.
import * as calendarInfo from '../../data.js';
import Header from '../header/Header.js';
import WeekDay from '../weekDay/WeekDay.js';
import './styles.css';


class Calendar extends Component {
  constructor() {
    super();
    // state holds the current year, month, day of week, and name
    this.state = {
      year: '',
      month: '',
      dayOfWeek: '',
      monthName: '',
      wholeMonth: []
    }

  }

  // when the componet is mounted it calls these methods that update the state of the calendar
  componentDidMount = async () => {
    await this.setCalendar();
    await this.getYearInfo();
    await this.determineMonth();
  }

  // this method creates a new Date object and gets the current month in time like 1, 2, 3, 4 and day of week, in same format and the year for the date.
  setCalendar = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    // then it sets it to state
    this.setState({ month, year, dayOfWeek: day})
    
  }

  // this method takes the date information stored in state and creates a new date object off of the current year, month, starting a day 1. it loops over the whole month creating a day object for each day of the month and the day of the week.  once each day is made it pushes it into an array to hold the whole month. 
  getYearInfo = () => {
    const { year, month } = this.state;
    const date = new Date(year, month, 1);
    const wholeMonth = [];

    while (date.getMonth() === month) {
      const settingEachDay = new Date(date);
      const eachDay = {
        dayOfWeek: settingEachDay.getDay(),
        dateOfDay: settingEachDay.getDate()
      };

      wholeMonth.push(eachDay);
      date.setDate(date.getDate() + 1);
    }

    this.setState({ wholeMonth })
  }

  //  this method takes the month that is being stored as a number and looks over the calendarInfo and graps the name of the month that is specfic for that day. The full name is stored into state
  determineMonth = () => {
    const { month } = this.state;
    const monthName = calendarInfo.months[month];
    this.setState({ monthName })
  }

  // this method looks for the day of week the is assocated together and makes it into rows to put the days that are mondays in the same column
  createWeeks = () => {

    const { wholeMonth, month } = this.state;

    const settingCalendar = calendarInfo.days.map(( day, index) => {
      
      // each day of the week is looped over and creates a new weekday if the index match
      return (
        <div
          className="weekDay"
          key={ day+index }
        >
          <WeekDay
            dayOfWeek={ wholeMonth.filter(day => day.dayOfWeek === index)}
            day={ day }
            month={ month }
            holidays={ calendarInfo.holidays } 
          >
          </WeekDay>
       </div>
      );
    });

    return settingCalendar;
  }

  render() {
    const { month, year, monthName } = this.state;
    
    return(
      <div className="Calendar">
        <Header
          name={ monthName }
          year={ year }
        >
        </Header>
        <section className="container">
          { this.createWeeks() }
        </section>
      </div>
    )
  }
}

export default Calendar;