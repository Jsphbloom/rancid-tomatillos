import './App.css';
import MovieDetails from '../MovieDetails/MovieDetails'
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import NotFound from '../NotFound/NotFound'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main className='App'>
      <header>
        <h1>Rancid Tomatillos</h1>
      </header>
      
      <Routes>
        <Route path="/" element={<MoviesContainer />}/>
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </main>
  );
}

export default App;

