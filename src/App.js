import './App.scss';
import Header from './components/Header/Header';
import FormAdd from './components/FromAdd/FormAdd';
import {useState, useEffect} from 'react';

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
            text: todoText
        }
        setTodoList([...todoList, todo]);
    }

    return (
        <div className='app'>
            <Header/>
            <main className='main'>
                <div className="container">
                    <FormAdd addTodo={addTodo}/>
                </div>
            </main>
        </div>
    );
}

export default App;
