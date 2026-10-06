export type TodoPriority = "High" | "Medium" | "Low";

export interface ToDoItem {
  title: string;
  priority: TodoPriority;
  createAt: string;
}
