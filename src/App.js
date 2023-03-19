import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Movielist from './components/movielist/Movielist';
import Movie from './pages/MovieDetail/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<Movielist/>}></Route>
          <Route path="/*" element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
