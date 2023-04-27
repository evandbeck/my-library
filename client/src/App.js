import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Reading from './components/Reading';
import Read from './components/Read';
import Wishlist from './components/Wishlist';
import Library from './components/Library';

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
    getAPIRead().then(data => setRead(data));
    getAPIWishlist().then(data => setWishlist(data));
    getAPILibrary().then(data => setLibrary(data));
  }, []);

  function handleReadingState(newBook) {
    setReading(reading => [...reading, newBook]);
  }

  return (
    <div className="text-center bg-slate-50 pb-10">
      <h1 className="py-6 text-7xl font-bold">My Library</h1>
      <Header handleReadingState={handleReadingState}/>
      <Reading reading={reading}/>
      <div className="container mx-auto p-2 grid grid-cols-2">
        <Read read={read}/>
        <Wishlist wishlist={wishlist}/>
      </div>
      <Library library={library}/>
    </div>
  );
}

export default App;
