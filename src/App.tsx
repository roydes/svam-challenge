import './App.css';

import { Outlet } from 'react-router-dom';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the SVAM Challenge
        </p>
        <div className='App-links'>
          <a className="App-link" href={`/people`}>People</a>
          <a className="App-link" href={`/films`}>Films</a>
          <a className="App-link" href={`/starships`}>Starships</a>
          <a className="App-link" href={`/vehicles`}>Vehicles</a>
          <a className="App-link" href={`/species`}>Species</a>
          <a className="App-link" href={`/planets`}>Planets</a>
          <a className="App-link" href={`/popular-items`}>Popular items</a>
        </div>
      </header>
      <div className='Container'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
