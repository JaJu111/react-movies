
import './Home.css';

import AllViewMovie from '../all-view-movie/AllViewMovie';
import SearchMovie from '../search-movie/SearchMovie';
import MovieList from '../movie-list/MovieList';
import MoviesAddForm from '../movies-add-form/MoviesAddForm';
import Movies from '../../movies';

export default function Home() {
    return (
        <>
            <div className="home-box">
                <div className="container">
                    <AllViewMovie />

                    <SearchMovie />

                    <MovieList movies={Movies} />

                    <MoviesAddForm />
                </div>
            </div>
        </>
    )
}