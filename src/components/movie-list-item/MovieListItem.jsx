import { Component } from 'react';
import './MovieListItem.css';

export default class MovieListItem extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            favorite: false,
            like: false
        }
    }

    onFavorite = () => {
        this.setState(({ favorite }) => ({
            favorite: !favorite
        }))
    }

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {
        const { item } = this.props;
        const { favorite, like } = this.state;

        return (
            <>
                <li className={`list-group-item ${favorite && 'favorite'} ${like && 'like'}`} onDoubleClick={this.onLike}>
                    <span className='list-group-item-label'>{item.name}</span>
    
                    <div className='btn-box'>
                        <input type="number" className='list-group-item-input' defaultValue={item.viewers} />
    
                        <button className='btn-cookie btn-sm' onClick={this.onFavorite}>
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
}