// src/components/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-500 text-white">
      <div className="text-lg font-semibold">Todo App</div>
      <div className="space-x-4">
        {/* <Link to="/" className="hover:underline">Home</Link> */}
        {/* <Link to="/todos" className="hover:underline">Todos</Link> */}
        {/* <Link to="/about" className="hover:underline">About</Link> */}
        <Link to="/" className="hover:underline">Todos</Link>
      </div>
    </nav>
  );
};

export default Navigation;
