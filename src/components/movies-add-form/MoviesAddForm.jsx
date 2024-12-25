import './MoviesAddForm.css';

export default function MoviesAddForm() {

    function submitForm() {
        console.log('submitForm');
    }

    return (
        <>
            <div className="movies-add-form">
                <h5 className='mb-4'>Добавить новый фильм</h5>

                <form className='add-form'>
                    <input type="text" className='form-control' placeholder='Название фильма' />
                    <input type="number" className='form-control' placeholder='Сколько раз просмотрено?' />

                    <button onChange={submitForm} type='submit' className='btn btn-outline-dark'>Добавить</button>
                </form>
            </div>
        </>
    )
}