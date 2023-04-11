import './App.css';
import axios from 'axios';
import Authors from './components/Authors';
import BooksContainer from './components/BooksContainer';
import { useState, useEffect } from 'react';

const API_BOOKS = "http://localhost:3000/api/v1/books";

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
      <BooksContainer books={books}/>
    </div>
  );
}

export default App;
