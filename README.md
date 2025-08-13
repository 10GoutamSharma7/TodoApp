# 📝 Todo App (React + Node.js + Express)

A simple, beautiful, and responsive Todo App built with **React (frontend)** and **Node.js + Express (backend)**.  
You can **add**, **toggle completion**, and **delete** tasks — all with a clean UI and smooth interactions.

---

## 🚀 Features
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Fully responsive design
- Modern gradient UI
- REST API with Express
- Axios for API requests

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Axios
- CSS (custom styling)

**Backend:**
- Node.js
- Express.js
- CORS enabled
- In-memory data store (can be upgraded to database)

---

## 📂 Project Structure
todo-app/
│
├── backend/ # Node.js + Express API
│ ├── server.js # Main server file
│
├── frontend/ # React app
│ ├── src/
│ │ ├── App.js # Main component
│ │ ├── App.css # Styling
│ │ └── index.js # Entry point
│
└── README.md # Project documentation


## ⚡ Getting Started
1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app

2️⃣ Setup Backend
bash
Copy
Edit
cd backend
npm install
node server.js
The backend will run at http://localhost:5000

3️⃣ Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
The frontend will run at http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/todos	Get all todos
POST	/todos	Add a new todo
PUT	/todos/:id	Toggle todo completion
DELETE	/todos/:id	Delete a todo

🎯 Future Improvements
Save todos in a database (MongoDB, PostgreSQL, etc.)
Add user authentication
Add dark mode toggle
Allow editing todo text
