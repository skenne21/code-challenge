import React from 'react';

 // This is the Form that will be created by the app, when a user clicks on the a date, this Form will come up where user can add title of event and select the start hour. The methods get since back to the day componet.

export const Form = ({ createEvent, updateTitle }) => {
  // form that will be displayed on the day when a user clicks on it. 
  return(
    <form
      onSubmit={( event) => createEvent(event)}
    >
      <input 
        className='eventName'
        name='eventName'
        placeholder='Please Enter a Name of Event'
        onChange={ (event) => updateTitle(event.target.value) }
      />
      <div>
        <label> Event Time</label>
        <select
          name="startOfEvent"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </form>
  )
}

export default Form;