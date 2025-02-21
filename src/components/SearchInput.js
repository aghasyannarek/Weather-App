import React from 'react';

const SearchInput = ({ style, onChange,onKeyDown }) => {
    return (
        <input
            type="text"
            className="Searchinput"
            style={style}
            placeholder="Enter city name"
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

export default SearchInput;