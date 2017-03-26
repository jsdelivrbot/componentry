import React from 'react';
import { Link } from 'react-router-dom';

export default function FourOhFour() {
  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/alerts'>Alerts</Link>
      </div>
      <div>
        <Link to='/buttons'>Buttons</Link>
      </div>
      <div>
        <Link to='/cards'>Cards</Link>
      </div>
      <div>
        <Link to='/icons'>Icons</Link>
      </div>
      <div>
        <Link to='/list-groups'>List Groups</Link>
      </div>
    </nav>
  );
}
