import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Reading from './components/Reading';
import Read from './components/Read';
import Wishlist from './components/Wishlist';
import Library from './components/Library';
// import NewAuthor from './components/NewAuthor';

const API_READING = "http://localhost:3000/api/v1/reading";
const API_READ = "http://localhost:3000/api/v1/read";
const API_WISHLIST = "http://localhost:3000/api/v1/wishlist";
const API_LIBRARY = "http://localhost:3000/api/v1/owned";

async function getAPIReading() {
  const resp = await axios.get(API_READING);
  return resp.data;
}

async function getAPIRead() {
  const resp = await axios.get(API_READ);
  return resp.data;
}

async function getAPIWishlist() {
  const resp = await axios.get(API_WISHLIST);
  return resp.data;
}

async function getAPILibrary() {
  const resp = await axios.get(API_LIBRARY);
  return resp.data;
}

function App() {
  const [reading, setReading] = useState([]);
  const [read, setRead] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    getAPIReading().then(data => setReading(data));
  }, []);

  useEffect(() => {
    getAPIRead().then(data => setRead(data));
  }, []);

  useEffect(() => {
    getAPIWishlist().then(data => setWishlist(data));
  }, []);

  useEffect(() => {
    getAPILibrary().then(data => setLibrary(data));
  }, []);

  return (
    <div className="App">
      <h1>My Library</h1>
      <Header />
      <Reading reading={reading}/>
      <Read read={read}/>
      <Wishlist wishlist={wishlist}/>
      <Library library={library}/>
    </div>
  );
}

export default App;
