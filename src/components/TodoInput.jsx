// src/components/TodoInput.jsx
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../states/todoAtom";
import { addTodo, updateTodo } from "../api/todoApi";

const TodoInput = ({ selectedTodo, clearSelectedTodo }) => {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDueDate(selectedTodo.dueDate);
      setCompleted(selectedTodo.completed);
    } else {
      resetForm();
    }
  }, [selectedTodo]);

  const resetForm = () => {
    setTitle("");
    setDueDate(new Date().toISOString().split("T")[0]);
    setCompleted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    if (selectedTodo) {
      const updatedTodo = await updateTodo(selectedTodo.id, { title, dueDate, completed });
      setTodos(todos.map((todo) => (todo.id === selectedTodo.id ? updatedTodo : todo)));
    } else {
      const newTodo = await addTodo({ title, dueDate, completed });
      setTodos([...todos, newTodo]);
    }
    resetForm();
    clearSelectedTodo();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error) setError("");
        }}
        className="p-2 border rounded"
      />
      
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 border rounded"
      />
      
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2"
        />
        Completed
      </label>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        {selectedTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoInput;
