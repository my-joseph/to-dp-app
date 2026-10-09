import { CheckCircle2, Edit } from "lucide-react";
import { type ToDoItem } from "../types/types";
import { useEffect, useState } from "react";

interface ToDoCardProp {
  item: ToDoItem;
  onTitleChange: (newTitle: string) => void;
  onPriorityChange?: () => void;
  title: string;
}

export function ToDoCard({ item, onTitleChange, title }: ToDoCardProp) {
  const [newTitle, setNewTitle] = useState(item.title);
  const [onEdit, setOnEdit] = useState<boolean>(false);

  const handleSaveClick = () => {
    setNewTitle(title);
    handleEditClick();
    onTitleChange("");
  };

  const handleEditClick = () => {
    setOnEdit((prev) => !prev);
  };

  useEffect(() => {
    onTitleChange(item.title);
  }, []);

  return (
    <article
      className={`grid grid-cols-[auto_1fr] w-full ${item.priority === "Medium" && `bg-[#EBEDFF]`} ${item.priority === "High" && `bg-[#FFE2E1]`} ${item.priority === "Low" && `bg-[#F8FFE9]`} p-3 rounded-xl gap-3`}
    >
      <div className=" flex justify-center p-3">
        <CheckCircle2 />
      </div>
      <div className="">
        <form
          className=" flex items-center gap-2 font-semibold"
          onSubmit={handleSaveClick}
        >
          {onEdit ? (
            <input
              autoFocus
              type="text"
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
            />
          ) : (
            <span>{newTitle}</span>
          )}
          <button
            type="button"
            className={`cursor-pointer  text-gray-400 hover:text-black`}
            onClick={() => handleEditClick()}
          >
            <Edit className=" inline w-4 h-4 aspect-square shrink-0" />
          </button>
        </form>
        <div className=" text-sm text-gray-500">
          {`Create at ${item.createAt}`}
        </div>

        {onEdit && (
          <div className=" flex justify-between items-center mt-4">
            <div className=" flex gap-2">
              <button
                type="submit"
                className=" flex justify-center items-center p-1 px-2 bg-black text-white  border border-transparent font-medium rounded-lg cursor-pointer"
                onClick={() => handleSaveClick()}
              >
                Save
              </button>
              <button
                onClick={() => handleEditClick()}
                type="button"
                className=" flex justify-center items-center p-1 px-2 bg-white text-black  border border-transparent font-medium rounded-lg cursor-pointer"
              >
                Cancel
              </button>
            </div>

            <button
              type="button"
              className=" flex justify-center items-center p-1 px-2 text-red-500 border border-red-500 font-medium rounded-lg cursor-pointer"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
