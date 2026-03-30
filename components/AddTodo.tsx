"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/components/features/todo/TodoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex justify-center w-full mt-12 px-4">
      <form
        onSubmit={addTodoHandler}
        className=" flex w-full space-x-3 max-w-xl"
      >
        <input
          type="text"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-offset-mist-500 
          shadow-sm"
          placeholder="Enter a todo..."
          value={input}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-black/50 shadow-sm bg-gray-300 border-0 py-2 px-6 focus:outline-none
         hover:bg-mist-400 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
