import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [mood, setMood] = useState('Senang');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      title,
      mood,
    };
    addTodo(newTodo);
    setTitle('');
    setMood('Senang');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Judul lagu"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="Senang">Senang</option>
        <option value="Galau">Galau</option>
        <option value="Semangat">Semangat</option>
      </select>
      <button type="submit">Tambah Lagu</button>
    </form>
  );
};

export default TodoForm;
