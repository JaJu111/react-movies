import './MovieList.css';
import MovieListItem from '../movie-list-item/MovieListItem';

export default function MovieList({ movies }) {
    return (
        <>
            <ul className="movie-list">
                {
                    movies.map(item => (
                        <MovieListItem key={item.id} item={item} /> // 2:13:53 ga keldim
                    ))
                }
            </ul>
        </>
    )
}