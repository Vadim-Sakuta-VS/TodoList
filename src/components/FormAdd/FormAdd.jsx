import React from 'react';
import './FormAdd.scss';
import sprite from '../../svg/sprite.svg';
import Button from '../Button/Button';
import {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

const FormAdd = ({addTodo}) => {
    let [value, setValue] = useState('');
    let [isError, setIsError] = useState(false);

    const svg = (
        <svg>
            <use href={sprite + '#icon-add'}/>
        </svg>
    );

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const onFocusHandler = () => {
        isError && setIsError(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const todoText = e.target['todo'].value;

        if (!isError && todoText) {
            addTodo(todoText);
            setValue('');
        } else {
            setIsError(true);
        }
    }

    return (
        <form className='form-add' onSubmit={submitHandler}>
            <input
                type='text'
                name='todo'
                placeholder='Add Todo...'
                className={`input form-add__input ${isError ? 'input--error' : ''}`}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                autoComplete='off'
            />
            <Button class_el='form-add__btn' inner={svg}/>
            <CSSTransition in={isError} timeout={200} classNames='error-mes' unmountOnExit>
                <p className='error-mes form-add__error-mes'>Can not be empty!</p>
            </CSSTransition>
        </form>
    );
};

export default FormAdd;