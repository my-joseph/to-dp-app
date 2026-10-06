import { CheckIcon } from "lucide-react";

export default function CheckedCircle() {
  return (
    <div className=" flex justify-center items-center rounded-full w-5.5 h-5.5 aspect-square shrink-0 bg-black text-white p-1.25">
      <CheckIcon className=" w-full h-full stroke-3" />
    </div>
  );
}
