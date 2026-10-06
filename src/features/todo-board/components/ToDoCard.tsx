import { CheckCircle2, Edit } from "lucide-react";
import CheckedCircle from "@/components/CheckedCircle";
import { type ToDoItem } from "../types/types";
interface ToDoCard {
  item: ToDoItem;
}

export function ToDoCard({ item }) {
  return (
    <article className=" grid grid-cols-[auto_1fr] w-full bg-[#EBEDFF] p-3 rounded-xl gap-3">
      <div className=" flex justify-center p-3">
        <CheckCircle2 />
      </div>
      <div className="">
        <div className=" flex items-center gap-2 font-semibold">
          New To do
          <Edit className=" inline w-4 h-4 aspect-square shrink-0 text-gray-400" />
        </div>
        <div className=" text-sm text-gray-500">
          Create at 19:02, 18 Dec 2026
        </div>
      </div>
    </article>
  );
}
