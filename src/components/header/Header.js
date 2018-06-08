import React from 'react';
import './styles.css'

const Header = ({ name, year }) => {
  return(
    <header className='header'>
      <h1>{name}<span>{year}</span></h1>
    </header>
  )
}

export default Header;