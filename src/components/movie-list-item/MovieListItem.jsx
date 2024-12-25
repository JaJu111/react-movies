import './MovieListItem.css';

export default function MovieListItem({ item }) {
    return (
        <>
            <li className={`list-group-item ${item.favorite && 'favorite'}`}>
                <span className='list-group-item-label'>{item.name}</span>

                <div className='btn-box'>
                    <input type="number" className='list-group-item-input' defaultValue={item.viewers} />

                    <button className='btn-cookie btn-sm'>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button className='btn-trash btn-sm'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <button className='btn-star btn-sm'>
                        <i className='fas fa-star'></i>
                    </button>
                </div>
            </li>
        </>
    )
}