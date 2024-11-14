import React, { useEffect, useState } from "react";
import Search from "./components/search/Search";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context";
import { FaSun, FaMoon } from "react-icons/fa";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

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

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    document.body.className = theme;  // Update body class for theme
  }, [theme]);

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
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className={`app-container ${theme}`}>
        <header className="header">
          <h1 className="title">Taskify</h1>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </header>
        <Search todos={todos} />
        <div className="todo-container">
          <TodoForm />
          <section>
            <h2>Upcoming Tasks</h2>
            {getFilteredTodos("upcoming").map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </section>
          <section>
            <h2>Overdue Tasks</h2>
            {getFilteredTodos("overdue").map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </section>
          <section>
            <h2>Completed Tasks</h2>
            {getFilteredTodos("completed").map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </section>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
