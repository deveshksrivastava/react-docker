import './App.css';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Adventure Travels</h1>
        <p>Your gateway to unforgettable journeys</p>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/destinations">Destinations</a>
          </li>
          <li>
            <a href="/packages">Packages</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <p>
          Explore the world with us and create memories that last a lifetime.
        </p>
        <button>
          <a href="/destinations">Discover More</a>
        </button>
      </main>
    </div>
  );
}

export default App;
