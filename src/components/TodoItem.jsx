import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);
  const [dueDate, setDueDate] = useState(todo.dueDate);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title, description, priority, dueDate });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const getBackgroundColor = () => {
    if (todo.completed) return "bg-gradient-to-r from-green-200 to-green-100"; 
    if (new Date(dueDate) < new Date()) return "bg-gradient-to-r from-red-200 to-red-100"; 
    return "bg-gradient-to-r from-yellow-200 to-yellow-100"; 
  };

  return (
    <div
      className={`flex flex-col border border-black/10 rounded-lg p-4 gap-y-3 shadow-md duration-300 text-black w-full max-w-md ${getBackgroundColor()} animate-gradient`}
    >
      <div className="flex justify-between items-center mb-2">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <div className="flex gap-x-3">
          <button
            className="inline-flex w-10 h-10 rounded-full text-lg border border-gray-300 justify-center items-center bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-indigo-300"
            onClick={() => {
              if (todo.completed) return;

              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
            className="inline-flex w-10 h-10 rounded-full text-lg border border-gray-300 justify-center items-center bg-gray-100 hover:bg-red-200 focus:ring-2 focus:ring-red-300"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      </div>
      <input
        type="text"
        className={`border outline-none w-full bg-white/20 rounded-lg transition-all ${
          isTodoEditable ? "border-gray-300 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <textarea
        className={`border outline-none w-full bg-white/20 rounded-lg transition-all ${
          isTodoEditable ? "border-gray-300 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-1.5 transition-all focus:ring-2 focus:ring-indigo-300"
        disabled={todo.completed}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border border-gray-300 rounded-lg px-3 py-1.5 transition-all focus:ring-2 focus:ring-indigo-300"
        disabled={todo.completed || !isTodoEditable}
      />
    </div>
  );
}

export default TodoItem;
