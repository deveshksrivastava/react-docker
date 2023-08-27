import React from 'react';

const PackagesPage = () => {
  return (
    <div className="packages-page">
      <h2>Choose Your Perfect Package</h2>
      <div className="package">
        <h3>Adventure Package</h3>
        <p>Explore the wilderness and experience thrilling activities.</p>
        <button>Book Now</button>
      </div>
      <div className="package">
        <h3>Relaxation Package</h3>
        <p>Unwind in luxurious resorts and enjoy spa treatments.</p>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default PackagesPage;
