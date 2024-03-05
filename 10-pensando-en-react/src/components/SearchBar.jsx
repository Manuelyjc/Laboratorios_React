import React from 'react';

function SearchBar({ onCheckboxChange }) {
    return (
        <form>
            <label>
            <input type="text" placeholder="Search product..." />
                <input type="checkbox" onChange={onCheckboxChange} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

export default SearchBar;
