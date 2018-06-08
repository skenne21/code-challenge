import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      year: '',
      month: '',
      dayOfWeek: '',

    }

  }

  componentDidMount = async () => {
    await this.setCalendar();
    await this.getYearInfo();
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

  render() {
    return(
      <div>Works</div>
    )
  }
}

export default Calendar;