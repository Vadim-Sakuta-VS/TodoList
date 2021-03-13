import './App.scss';
import Header from './components/Header/Header';
import FormAdd from './components/FormAdd/FormAdd';
import React, {useState, useEffect} from 'react';
import TodoItem from './components/TodoItem/TodoItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Preview from './components/Preview/Preview';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isPreviewVisible, setIsPreviewVisible] = useState(true);

    useEffect(() => {
        const todoListStrJSON = localStorage.getItem('todoList');
        if (todoListStrJSON) {
            setTodoList(JSON.parse(todoListStrJSON));
        }

        setTimeout(() => {
            setIsPreviewVisible(false);
        }, 5000);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }, [todoList]);

    let addTodo = (todoText) => {
        const todo = {
            id: Date.now(),
            text: todoText,
            isCompleted: false
        }
        setTodoList([...todoList, todo]);
    }

    let deleteTodo = (id) => {
        const changedTodoList = todoList.filter(t => t.id !== id);
        setTodoList(changedTodoList);
    }

    let completeTodo = (id) => {
        const changedTodoList = todoList.map(t => {
            t.id === id && (t.isCompleted = !t.isCompleted);
            return t;
        });
        setTodoList(changedTodoList);
    }

    let todoItems = todoList.map(t => (
        <CSSTransition key={t.id} timeout={500} classNames='todo-item'>
            <TodoItem
                id={t.id}
                text={t.text}
                isCompleted={t.isCompleted}
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
            />
        </CSSTransition>
    ));

    return (
        <div className={`app ${isPreviewVisible ? 'app--hidden' : ''}`}>
            <Preview isVisible={isPreviewVisible}/>
            <Header/>
            <main className='main'>
                <div className="container">
                    <FormAdd addTodo={addTodo}/>
                    <TransitionGroup component='ul' className='todo-list main__todo-list'>
                        {todoItems}
                    </TransitionGroup>
                </div>
            </main>
        </div>
    );
}

export default App;
