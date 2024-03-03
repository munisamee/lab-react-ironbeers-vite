import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => {
        setBeers(data);
      })
      .catch(error => {
        console.error('Error fetching beers:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Beers</h2>
      <div>
        {beers.map(beer => (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;

