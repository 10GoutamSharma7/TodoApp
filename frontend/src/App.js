// useState manages component state.
// useEffect runs side-effects (like fetching data).
// axios performs HTTP requests.
import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

export function App() {
  // todos: array displayed in the UI.
  // text: controlled input field value.
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Empty dependency array [] means this runs once after the first render.
  // axios.get fetches all todos; then we store them in state via setTodos.
  useEffect(() => {
    axios.get("https://todoapp-7ipp.onrender.com").then(res => setTodos(res.data));
  }, []);

  // Sends { text } to the backend.
  // Uses the server’s response (which includes the generated id) and appends it to state.
  // Clears the input field.
  const addTodo = () => {
    if (!text.trim()) return; // ignore empty
    axios.post("https://todoapp-7ipp.onrender.com", { text }).then(res => {
      setTodos([...todos, res.data]);// append new todo from server
      setText("");// clear input
    });
  };

  // Calls PUT to toggle on the server.
  // Optimistically mirrors that change in local state by flipping done.
  const toggleTodo = (id) => {
    axios.put(`https://todoapp-7ipp.onrender.com/${id}`).then(() => {
      setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
    });
  };

  // Calls DELETE then removes that todo from state.
  const deleteTodo = (id) => {
    axios.delete(`https://todoapp-7ipp.onrender.com/${id}`).then(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    });
  };

  return (
    <div style={{ padding: 20 }} className="todo-container">
      <h1>Todo App</h1>
      <div  className="todo-input">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
