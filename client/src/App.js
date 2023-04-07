import './App.css';
import axios from 'axios';
import Authors from './components/Authors';
import { useState, useEffect } from 'react';

const API_URL = "http://localhost:3000/api/v1/authors";

function getAPIData() {
  return axios.get(API_URL).then(resp => resp.data);
}

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then(items => {
      if(mounted) {
        setAuthors(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Authors authors={authors}/>
    </div>
  );
}

export default App;
