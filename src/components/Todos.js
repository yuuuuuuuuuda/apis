import { useState } from 'react';

function Todos() {
  const [input, setInput] = useState();
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Date.now(),
        todo: input,
      },
    ]);

    setInput('');

    console.log('Todos');
    console.log(todos);
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>

      {/* List Todos */}
      <ul>
        {todos.length > 0
          ? todos.map((todo) => (
              <li key={todo.id}>
                {todo.todo}{' '}
                <button onClick={() => handleDelete(todo.id)}>delete</button>
              </li>
            ))
          : 'No todos!'}
      </ul>
    </div>
  );
}

export default Todos;