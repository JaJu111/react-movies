import './SearchMovie.css';

import FilterMovie from '../filter-movie/FilterMovie';

export default function SearchMovie() {
    return (
        <>
            <div className="search-box">
                <input className='form-control mb-4' type="text" placeholder='Искать фильмы...' />

                <FilterMovie />
            </div>
        </>
    )
}