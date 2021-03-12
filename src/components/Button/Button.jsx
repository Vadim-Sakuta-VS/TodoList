import React from 'react';
import './Button.scss';

const Button = (props) => {
    let onClickHandler = () => {
        props.handleOnClick && props.handleOnClick();
    }

    return (
        <button className={`btn ${props.class_el}`} onClick={onClickHandler}>
            {props.inner}
        </button>
    );
};

export default Button;