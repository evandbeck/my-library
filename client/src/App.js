import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Reading from './components/Reading';
import Read from './components/Read';
import Wishlist from './components/Wishlist';
import Library from './components/Library';

const API_READING = "http://localhost:3000/api/v1/reading";
const API_LIBRARY = "http://localhost:3000/api/v1/owned";

async function getAPILibrary() {
  const resp = await axios.get(API_LIBRARY);
  return resp.data;
}

async function getAPIReading() {
  const resp = await axios.get(API_READING);
  return resp.data;
}

function App() {
  const [library, setLibrary] = useState([]);
  const [reading, setReading] = useState([]);

  useEffect(() => {
    getAPILibrary().then(data => setLibrary(data));
  }, []);

  useEffect(() => {
    getAPIReading().then(data => setReading(data));
  }, []);

  return (
    <div className="App">
      <h1>My Library</h1>
      <Header />
      <Reading reading={reading}/>
      <Read />
      <Wishlist />
      <Library library={library}/>
    </div>
  );
}

export default App;
