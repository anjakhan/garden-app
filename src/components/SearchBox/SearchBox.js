import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 mb4 ba b--black-10 bg-light-gray'
                type='search'
                placeholder='search items'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;