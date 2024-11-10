// src/pages/Todos.jsx
import React, { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Todos = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);

  const clearSelectedTodo = () => setSelectedTodo(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoInput selectedTodo={selectedTodo} clearSelectedTodo={clearSelectedTodo} />
      <TodoList onSelectTodo={setSelectedTodo} clearSelectedTodo={clearSelectedTodo} />
    </div>
  );
};

export default Todos;
