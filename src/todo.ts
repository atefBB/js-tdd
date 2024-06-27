type Task = {
  id: number;
  description: string;
  status: "todo" | "done";
};

export class Todo {
  todo: Task[] = [];

  list() {
    return this.todo;
  }

  add(task: Task) {
    this.todo.push(task);
  }

  markAsDone(id: number) {
    let task = this.todo.find((item) => item.id === id) as Task;

    return {
      ...task,
      status: "done",
    };
  }
}
