import React from 'react';

const SearchInput = ({ style, onChange }) => {
    return (
        <input
            type="text"
            className="Searchinput"
            style={style}
            placeholder="Enter city name"
            onChange={onChange}
        />
    );
};

export default SearchInput;