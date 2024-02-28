import { useState } from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleInput = (event) => {
        setQuery(event.target.value);
    }
    const handleClick = () => {
        onSearch(query);
    }
    return (
        <div className="search">
            <input onKeyUp={handleInput} type="search" placeholder="Search..." />
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default Search;