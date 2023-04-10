import './App.css';
import axios from 'axios';
import Authors from './components/Authors';
import Books from './components/Books';
import { useState, useEffect } from 'react';

const API_AUTHORS = "http://localhost:3000/api/v1/authors";
const API_BOOKS = "http://localhost:3000/api/v1/books";

function getAPIAuthors() {
  return axios.get(API_AUTHORS).then(resp => resp.data);
}

function getAPIBooks() {
  return axios.get(API_BOOKS).then(resp => resp.data);
}

function App() {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIAuthors().then(items => {
      if(mounted) {
        setAuthors(items);
      }
    });
    return () => (mounted = false);
  }, []);

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
      <h1>Hello</h1>
      <Authors authors={authors}/>
      <Books books={books}/>
    </div>
  );
}

export default App;
