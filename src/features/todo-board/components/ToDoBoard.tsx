import { useEffect, useState } from "react";
import ToDoColumn from "./TodoColumn";
import { type ToDoItem } from "../types/types";

export const initailItem: ToDoItem = {
  title: "New To Do",
  priority: "Low",
  createAt: `${new Date()}`,
};

export default function ToDoBoard() {
  const [toDos, setToDos] = useState<ToDoItem[]>([initailItem]);

  const handleAddNewTodo = (item: ToDoItem) => {
    setToDos((prev) => [...prev, item]);
  };

  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div className=" p-4 pt-0">
      <div className=" bg-white w-full min-h-screen rounded-3xl flex flex-col p-4">
        <h2 className=" font-semibold text-2xl mb-3">Overview</h2>
        <article className="grid grid-cols-2 grid-rows-2 aspect-square w-full gap-3 mb-3">
          <div className=" flex justify-center items-center aspect-square bg-[#D9D9D9] rounded-xl relative">
            <span className=" text-7xl font-semibold">17</span>
            <span className=" absolute bottom-0 left-0 p-4 pb-3 font-medium">
              All To dos
            </span>
          </div>
          <div className=" flex justify-center items-center aspect-square bg-[#E7ADAB] rounded-xl text-white relative">
            <span className=" text-7xl font-semibold">14</span>
            <span className=" absolute bottom-0 left-0 p-4 pb-3 font-medium">
              14 out of to do done
            </span>
          </div>
          <div className=" col-span-2 flex justify-center items-center w-full bg-[#F6F6F6] rounded-xl"></div>
        </article>
        <article>
          <h3 className=" font-semibold text-2xl mb-3">Your Activity</h3>
          <ToDoColumn toDos={toDos} onAdd={handleAddNewTodo} />
        </article>
      </div>
    </div>
  );
}
