
import axios from "axios";

const api = axios.create({
  baseURL: "https://6730d6af7aaf2a9aff0f134b.mockapi.io/api",
});

export const fetchTodos = async () => {
  const response = await api.get("/todo");
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await api.post("/todo", todo);
  return response.data;
};

export const updateTodo = async (id, todo) => {
  const response = await api.put(`/todo/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todo/${id}`);
};
