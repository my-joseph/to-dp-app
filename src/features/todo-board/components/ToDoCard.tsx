import { CheckCircle2, Edit } from "lucide-react";
import { type ToDoItem } from "../types/types";
import { useState } from "react";
interface ToDoCardProp {
  item: ToDoItem;
}

export function ToDoCard({ item }: ToDoCardProp) {
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const handleEditClick = () => {
    setOnEdit(true);
  };
  return (
    <article
      className={`grid grid-cols-[auto_1fr] w-full ${item.priority === "Medium" && `bg-[#EBEDFF]`} ${item.priority === "High" && `bg-[#FFE2E1]`} ${item.priority === "Low" && `bg-[#F8FFE9]`} p-3 rounded-xl gap-3`}
    >
      <div className=" flex justify-center p-3">
        <CheckCircle2 />
      </div>
      <div className="">
        <div className=" flex items-center gap-2 font-semibold">
          {item.title}
          <Edit
            className=" inline w-4 h-4 aspect-square shrink-0 text-gray-400"
            onClick={() => handleEditClick()}
          />
        </div>
        <div className=" text-sm text-gray-500">
          {`Create at ${item.createAt}`}
        </div>
      </div>
    </article>
  );
}
