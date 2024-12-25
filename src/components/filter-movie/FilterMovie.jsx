import './FilterMovie.css';

export default function FilterMovie() {
    return (
        <>
            <div className="btn-group">
                <button className='btn btn-dark'>Все фильмы</button>
                <button className='btn btn-outline-dark'>Известные фильмы</button>
                <button className='btn btn-outline-dark'>Самые просматриваемые фильмы</button>
            </div>
        </>
    )
}