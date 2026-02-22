import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/Aboutview';
import MovieView from './components/Movieview';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';
import SearchView from './components/SearchView';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=761f229934f98313541b7cddd6d1e86b&query=${searchText}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
      }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search"
          element={
            <SearchView
              keyword={searchText}
              searchResults={searchResults}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*"      element ={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
