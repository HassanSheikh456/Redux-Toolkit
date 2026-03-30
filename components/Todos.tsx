"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./features/todo/TodoSlice";

type todo = {
  id: number | string;
  text: string;
};

type RootState = {
  todos: todo[];
};

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="max-w-xl mx-auto mt-8 px-4 ">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Todos</h2>
      <ul className="list-none space-y-3">
        {todos.map((todo) => (
          <li 
          key={todo.id}
          className="flex items-center justify-between mt-4 bg-gray-400
          px-4 py-2 rounded-xl shadow-sm"
          >
           <div className="text-gray-800 font-medium"> {todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo({ id: todo.id }))}
             className="text-white bg-red-500 border-0 p-2 focus:outline-none
             hover:bg-red-600 rounded text-md transition">
            ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
