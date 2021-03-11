import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <button className={`btn ${props.class_el}`}>
            {props.inner}
        </button>
    );
};

export default Button;