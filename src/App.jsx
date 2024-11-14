import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getFilteredTodos = (status) => {
    const now = new Date();
    return todos.filter((todo) => {
      if (status === "completed") return todo.completed;
      if (status === "upcoming") return !todo.completed && new Date(todo.dueDate) > now;
      if (status === "overdue") return !todo.completed && new Date(todo.dueDate) < now;
      return true;
    });
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
        <header className="header">
          <h1>Taskify</h1>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </header>

        <div className="main-content">
          <Search todos={todos} />
          <div className="task-container">
            <TodoForm />
            
            <section>
              <h2>Upcoming Tasks</h2>
              <div className="task-list">
                {getFilteredTodos("upcoming").map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </div>
            </section>

            <section>
              <h2>Overdue Tasks</h2>
              <div className="task-list">
                {getFilteredTodos("overdue").map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </div>
            </section>

            <section>
              <h2>Completed Tasks</h2>
              <div className="task-list">
                {getFilteredTodos("completed").map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
