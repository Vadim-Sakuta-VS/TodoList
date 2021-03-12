import React from 'react';
import './Checkbox.scss';
import sprite from '../../svg/sprite.svg';
import {useRef} from 'react';

const Checkbox = ({name, id, checked, handleOnChange}) => {
    let inputRef = useRef(null);

    const svg = (
        <svg>
            <use href={sprite + '#icon-check'}/>
        </svg>
    );

    const onChangeHandler = () => {
        handleOnChange();
    }

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            let checkbox = inputRef.current;
            checkbox.checked = !checkbox.checked;
            handleOnChange();
        }
    }

    return (
        <>
            <input
                type='checkbox'
                name={name}
                id={id}
                className='checkbox'
                checked={checked}
                onChange={onChangeHandler}
                ref={inputRef}
            />
            <label
                htmlFor={id}
                className='checkbox-label'
                tabIndex={0}
                onKeyDown={onKeyDownHandler}
            >
                {svg}
            </label>
        </>
    );
}

export default Checkbox;