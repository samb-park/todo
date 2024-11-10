import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoAtom } from "../states/todoAtom";
import { fetchTodos, deleteTodo } from "../api/todoApi";

const TodoList = ({ onSelectTodo, clearSelectedTodo }) => {
  const [todos, setTodos] = useRecoilState(todoAtom);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, [setTodos]);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));

    clearSelectedTodo();
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-between items-center p-2 border-b">
          <div onClick={() => onSelectTodo(todo)}>
            <h3 className="text-lg font-bold">{todo.title}</h3>
            <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
          <button onClick={() => handleDelete(todo.id)} className="text-red-500">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
