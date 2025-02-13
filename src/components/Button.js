import React from 'react';

const Button = ({ Click, style }) => {
    return (
        <button
            type="button"
            className="btn"
            style={style}
            onClick={Click}
        >
            Search
        </button>
    );
};

export default Button;