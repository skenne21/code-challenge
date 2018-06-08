import React, { Component } from 'react';
import * as calendarInfo from '../../data.js';
import Header from '../header/Header.js';
// import PropTypes from 'prop-types';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      year: '',
      month: '',
      dayOfWeek: '',
      monthName: ''
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
      wholeMonth.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    this.setState({ wholeMonth })
  }

  determineMonth = () => {
    const { month } = this.state;
    const monthName = calendarInfo.months[month];
    this.setState({ monthName })
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

      </div>
    )
  }
}

export default Calendar;