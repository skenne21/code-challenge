import React, {Component} from 'react';
import Form from '../form/Form.js'
import './styles.css';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      eventTitle: '', 
    }

  }

  // when day is clicked on it will change the state to true to show the event form for the user to fill out
  showEventForm = () => {
    this.setState({ show: true})
  }

  createEvent = (event) => {
    // this method will take the event inforation and add events to the event object that will be stored in the data.js, 
    
  }

  updateTitle = (title) => {
    // this method take the title and will update event title in state to be added to the event object
  }

  createForm = () => {
    return (
      <Form
        createEvent={ this.createEvent() }
        updateTitle={ this.updateTitle() }
      >
      </Form>
    )
  }

  render() {
    const { show } = this.state
    return(
      <div 
        className="Day"
        onClick={ this.showEventForm }
      >
        <h3>{this.props.date}</h3>
        <p>{this.props.holiday.length ? this.props.holiday[0].holiday : ''}</p>
        {
          // if this.state.show is true it will create the form in the date to be displayed on the calendar otherwise it will show a empty string.
          show ? this.createForm() : ''
        }
      </div>
    )
  }
  
}

export default Day;