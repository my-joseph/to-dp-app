import { Bell, Settings, UserCircle2 } from "lucide-react";

export default function Navigation() {
  return (
    <nav className=" w-full p-4">
      <div className=" flex justify-between items-center bg-white px-4 py-3 rounded-3xl">
        <div className=" flex gap-2 items-center">
          <UserCircle2 role="button" />
          <span className=" font-medium">Joseph</span>
        </div>
        <div className=" flex gap-2 items-center">
          <Bell role="button" className=" cursor-pointer" />
          <Settings role="button" className=" cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
