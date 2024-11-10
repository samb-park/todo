import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav className="flex justify-between p-4 bg-blue-500 text-white">
        <div className="text-lg font-semibold">Todo App</div>
        <div className="space-x-4">
          {/* <Link to="/" className="hover:underline">Home</Link>
          <Link to="/todos" className="hover:underline">Todos</Link>
          <Link to="/about" className="hover:underline">About</Link> */}
          <Link to="/" className="hover:underline">Todos</Link>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
