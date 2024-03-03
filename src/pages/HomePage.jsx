import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to IronBeers</h1>
      <p>Discover a world of beers!</p>
      <nav>
        <ul>
          <li>
            <Link to="/all-beers">All Beers</Link>
          </li>
          <li>
            <Link to="/random-beer">Random Beer</Link>
          </li>
          <li>
            <Link to="/new-beer">New Beer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;

