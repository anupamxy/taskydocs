import React, { useState, useEffect } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [theme, setTheme] = useState("light");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!title || !description || !dueDate) return;

    addTodo({ title, description, completed: false, dueDate, priority });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  // Handle theme change and localStorage persistence
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex justify-center">
      <form
        onSubmit={add}
        className="flex flex-col gap-6 max-w-lg w-full mx-auto p-6 rounded-xl shadow-xl border border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-indigo-500 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black"
      >
     
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Add Your Task</h2>
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-white p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors text-sm"
          >
            {theme === "light" ? "🌙 Dark" : "🌞 Light"}
          </button>
        </div>

     
        <input
          type="text"
          placeholder="Task Title"
          className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      
        <textarea
          placeholder="Task Description"
          className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

    
        <input
          type="date"
          className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

      
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

     
        <button
          type="submit"
          className="mt-6 w-full rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-green-300 hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-green-600 dark:focus:ring-green-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
