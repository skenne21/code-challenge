import React from 'react';

const Header = ({ name, year }) => {
  return(
    <header className='header'>
      <h1>{name}</h1><span>{year}</span>

    </header>
  )
}

export default Header;