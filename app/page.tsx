"use client";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todos";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";

const page = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-2xl pt-4">Learn about redux toolkit </h1>
      <AddTodo />
      <Todos /></div>
    </Provider>
  );
};

export default page;
