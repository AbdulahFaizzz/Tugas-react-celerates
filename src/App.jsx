import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  const defaultTodos = [
    { id: 1, title: 'Remaja - Hivi', mood: 'Semangat' },
    { id: 2, title: 'If only - Skyline', mood: 'Galau' },
    { id: 3, title: 'Kasih Aba Aba - Naykilla', mood: 'Senang' },
  ];

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('musicTodos');
    return saved ? JSON.parse(saved) : defaultTodos;
  });

  useEffect(() => {
    localStorage.setItem('musicTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>🎵 Daftar Lagu Sesuai Mood 🎵</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;