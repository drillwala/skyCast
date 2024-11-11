import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import './App.css';

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Weather city={city}/>
    </>
  );
}

export default App;
