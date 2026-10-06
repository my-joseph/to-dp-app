import Navigation from "@/components/Navigation";
import { ToDoBoard } from "@/features/todo-board";
export default function App() {
  return (
    <>
      <div className=" min-h-screen">
        <Navigation />
        <ToDoBoard />
      </div>
    </>
  );
}
