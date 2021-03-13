import React from 'react';
import './TodoItem.scss';
import Button from '../Button/Button';
import sprite from '../../svg/sprite.svg';
import Checkbox from '../Checkbox/Checkbox';

const TodoItem = ({id, text, isCompleted, deleteTodo, completeTodo}) => {
    const svg = (
        <svg>
            <use href={sprite + '#icon-delete'}/>
        </svg>
    );

    let onDeleteTodo = () => {
        deleteTodo(id);
    }

    let onCompleteTodo = () => {
        completeTodo(id);
    }

    let checkboxId = 'checkbox' + id;

    return (
        <li className={`todo-item ${isCompleted ? 'todo-item--completed' : ''}`}>
            <div className="todo-item__col">
                <Checkbox id={checkboxId} name={checkboxId} checked={isCompleted} handleOnChange={onCompleteTodo}/>
                <p className="todo-item__text">{text}</p>
            </div>
            <div className="todo-item__col">
                <Button class_el='todo-item__btn' inner={svg} handleOnClick={onDeleteTodo}/>
            </div>
        </li>
    );
};

export default TodoItem;