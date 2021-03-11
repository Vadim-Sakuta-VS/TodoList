import React from 'react';
import './FormAdd.scss';
import sprite from '../../svg/sprite.svg';
import Button from '../Button/Button';
import {useState} from 'react';

const FormAdd = ({addTodo}) => {
    let [value, setValue] = useState('');

    const svg = (
        <svg>
            <use href={sprite + '#icon-add'}/>
        </svg>
    );

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const onFocusHandler = (e) => {
        e.target.classList.remove('input--error');
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const todoText = e.target['todo'].value;

        if (todoText) {
            addTodo(todoText);
            setValue('');
        } else {
            e.target['todo'].classList.add('input--error');
        }
    }

    return (
        <form className='form-add' onSubmit={submitHandler}>
            <input
                type='text'
                name='todo'
                placeholder='Add Todo...'
                className='input form-add__input'
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
            />
            <Button class_el='form-add__btn' inner={svg}/>
        </form>
    );
};

export default FormAdd;