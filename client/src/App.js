import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Reading from './components/Reading';
import Read from './components/Read';
import Wishlist from './components/Wishlist';
import Library from './components/Library';

const API_BOOKS = "http://localhost:3000/api/v1/owned";

function getAPIBooks() {
  return axios.get(API_BOOKS).then(resp => resp.data);
}

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIBooks().then(items => {
      if(mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>My Library</h1>
      <Header />
      <Reading />
      <Read />
      <Wishlist />
      <Library books={books}/>
    </div>
  );
}

export default App;
