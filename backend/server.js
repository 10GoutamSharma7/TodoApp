const express = require('express');
const cors = require('cors');

// app.use(cors()): enables Cross-Origin Resource Sharing so http://localhost:3000 (React) can call http://localhost:5000 (API).
// app.use(express.json()): parses incoming JSON request bodies (so req.body works for POST/PUT).
const app = express();
app.use(cors());
app.use(express.json());

// In-memory data store. Important: this resets whenever the server restarts (not persistent).
let todos = [
    {id: 1, text: "Todo react", done: false},
    {id: 2, text: "Todo backend", done: false},
    {id: 3, text: "Todo frontend", done: false}
];

// On GET /todos, send the current array as JSON.
app.get('/todos', (req, res) => {
    res.json(todos);
});

// On POST /todos, expects JSON like { "text": "Buy milk" }.
// Creates a new todo:
// id: uses Date.now() (simple unique-ish number).
// text: from req.body.text (thanks to express.json()).
// done: default false.
// Returns the created todo.
app.post("/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(newTodo);
  res.json(newTodo);
});

// On PUT /todos/:id:
// used for updating the todo by matching the id
// Reads the id from the URL path.
// Creates a new array, flipping the done flag for the matched todo (immutable style).
// Sends a simple success JSON; frontend is responsible for flipping UI state to match.
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  res.json({ success: true });
});

// On DELETE /todos/:id, removes the matching todo by filtering it out.
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Backend running on port 5000"));





