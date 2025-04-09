import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main className='App'>
      <header>
        <h1>rancid tomatillos</h1>
      </header>
      
      <Routes>
        <Route path="/" element={<MoviesContainer />}/>
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>

    </main>
  );
}

export default App;

