import './App.scss';
import Header from './components/Header/Header';
import FormAdd from './components/FormAdd/FormAdd';
import {useState, useEffect} from 'react';
import TodoItem from './components/TodoItem/TodoItem';

function App() {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const todoListStrJSON = localStorage.getItem('todoList');
        if (todoListStrJSON) {
            setTodoList(JSON.parse(todoListStrJSON));
        }
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
        <TodoItem
            key={t.id}
            id={t.id}
            text={t.text}
            isCompleted={t.isCompleted}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
        />
    ));

    return (
        <div className='app'>
            <Header/>
            <main className='main'>
                <div className="container">
                    <FormAdd addTodo={addTodo}/>
                    <ul className="todo-list main__todo-list">
                        {todoItems}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default App;
