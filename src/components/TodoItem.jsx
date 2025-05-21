const moodColors = {
  Senang: '#fff9c4',
  Galau: '#e1bee7',
  Semangat: '#ffccbc',
};

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div
      className="todo-card"
      style={{ backgroundColor: moodColors[todo.mood] }}
    >
      <h3>{todo.title}</h3>
      <p>Mood: {todo.mood}</p>
      <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
    </div>
  );
};

export default TodoItem;
