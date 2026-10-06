import { type LucideIcon } from "lucide-react";
import { type ToDoItem } from "@/features/todo-board/types/types";
import { initailItem } from "@/features/todo-board/components/ToDoBoard";

interface ButtonProp {
  label: string;
  icon?: LucideIcon;
  onForm: () => void;
}

export default function Button({ label, icon: Icon, onForm }: ButtonProp) {
  return (
    <button
      onClick={() => onForm()}
      type="button"
      className={
        Icon
          ? "px-2 py-1 font-medium flex justify-center items-center bg-black text-white rounded-lg pr-3 gap-1 hover:bg-[#2a2a2a] cursor-pointer"
          : "px-2 py-1 font-medium flex justify-center items-center bg-black text-white rounded-lg hover:bg-[#2a2a2a] cursor-pointer"
      }
    >
      {Icon && <Icon className=" w-4 h-4 aspect-square shrink-0"></Icon>}
      <span>{label}</span>
    </button>
  );
}
