import '../styles/content.scss';
import { MovieCard } from '../components/MovieCard';
import { Category } from './Category';



interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface propsContent {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content({movies, selectedGenre}: propsContent) {

return ( <div className="container">
 
 <Category selectedGenre={selectedGenre} />
  <main>
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
      ))}
    </div>
  </main>
</div>
);
}