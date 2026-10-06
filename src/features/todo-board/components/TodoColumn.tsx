import Button from "@/components/Button";
import { Plus, Search } from "lucide-react";
import { ToDoCard } from "./ToDoCard";
import { type ToDoItem } from "../types/types";

interface ToDoColumnProp {
  toDos: ToDoItem[];
  onAdd?: (item: ToDoItem) => void;
}

export default function ToDoColumn({ onAdd, toDos }: ToDoColumnProp) {
  return (
    <div>
      <div className=" flex flex-col">
        <div className=" flex justify-between items-center">
          <div className=" flex items-center bg-[#F1F1F1] rounded-lg border border-[#F1F1F1]">
            <button className=" px-3 py-1 font-medium flex justify-center items-center bg-black text-white rounded-lg cursor-pointer">
              All
            </button>
            <button className=" px-3 py-1 font-medium flex justify-center items-center cursor-pointer">
              High
            </button>
            <button className=" px-3 py-1 font-medium flex justify-center items-center cursor-pointer">
              Medium
            </button>
            <button className=" px-3 py-1 font-medium flex justify-center items-center cursor-pointer">
              Low
            </button>
          </div>
          <Button label={"Add"} icon={Plus} onAdd={onAdd} />
        </div>
        <div className=" my-3">
          <div className=" flex items-center  bg-[#F1F1F1] max-w-100 w-full rounded-full px-4 py-2 gap-4 focus-within:ring-black focus-within:ring">
            <label htmlFor="toDoSearch" className=" cursor-pointer">
              <Search className=" w-5 h-5 aspect-square shrink-0" />
            </label>
            <input
              id="toDoSearch"
              type="text"
              placeholder="Search..."
              className="py-1 placeholder:font-medium w-full outline-0"
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-3 w-full">
        {toDos &&
          toDos.length > 0 &&
          toDos.map((item) => {
            return <ToDoCard item={item} />;
          })}
      </div>
    </div>
  );
}
