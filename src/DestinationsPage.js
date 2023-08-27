import React from 'react';

const DestinationsPage = () => {
  return (
    <div className="destinations-page">
      <h2>Discover Amazing Destinations</h2>
      <div className="destination">
        <img src="destination1.jpg" alt="Destination 1" />
        <h3>Destination 1</h3>
        <p>Experience the beauty and culture of this incredible place.</p>
      </div>
      <div className="destination">
        <img src="destination2.jpg" alt="Destination 2" />
        <h3>Destination 2</h3>
        <p>Embark on an adventure like never before in this stunning location.</p>
      </div>
    </div>
  );
}

export default DestinationsPage;
