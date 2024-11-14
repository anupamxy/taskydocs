import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!title || !description || !dueDate) return;

    addTodo({ title, description, completed: false, dueDate, priority });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={add}
      className="flex flex-col gap-6 max-w-xl mx-auto p-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-xl border border-transparent transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-indigo-500"
    >
      {/* Title Input */}
      <input
        type="text"
        placeholder="Task Title"
        className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description Textarea */}
      <textarea
        placeholder="Task Description"
        className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Due Date Input */}
      <input
        type="date"
        className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {/* Priority Dropdown */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border border-transparent rounded-lg px-4 py-3 bg-zinc-900 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 w-full rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-green-300 hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-green-600"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
