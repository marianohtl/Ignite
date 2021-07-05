import '../styles/content.scss';
import { MovieCard } from './MovieCard';


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
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  MovieProps:Array<MovieProps>;
  GenderProps: GenreResponseProps;
}




export function Content(props:ContentProps) {
  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {props.GenderProps.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.MovieProps.map( movie => (
          <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}