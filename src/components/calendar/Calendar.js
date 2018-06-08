import React, { Component } from 'react';
import * as calendarInfo from '../../data.js';
import Header from '../header/Header.js';
import WeekDay from '../weekDay/WeekDay.js';
// import PropTypes from 'prop-types';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      year: '',
      month: '',
      dayOfWeek: '',
      monthName: '',
      wholeMonth: []
    }

  }

  componentDidMount = async () => {
    await this.setCalendar();
    await this.getYearInfo();
    await this.determineMonth();
  }

  setCalendar = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    this.setState({ month, year, dayOfWeek: day})
    
  }

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

  determineMonth = () => {
    const { month } = this.state;
    const monthName = calendarInfo.months[month];
    this.setState({ monthName })
  }

  createWeeks = () => {
    const { wholeMonth } = this.state;
    this.state.wholeMonth.filter(day => console.log(day))
    calendarInfo.days.map(( day, index) => {
      <div
        className="weekDay"
        key={ day+index }
      >
        <WeekDay
          dayOfWeek={
            wholeMonth.filter(day => console.log(day))
          }
          
        >
        </WeekDay>
      </div>

    })
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