import { Todo } from "./todo";
describe("Todo", () => {
  let todo: any;

  beforeEach(() => {
    todo = new Todo();
  });

  it("list all todo", () => {
    let emptyTodo = todo.list();
    expect(emptyTodo.length).toBe(0);
  });

  it("add a todo", () => {
    todo.add({ id: 1, description: "Learn TDD", status: "todo" });
    let todoList = todo.list();
    expect(todoList.length).toBe(1);
  });

  it("mark a todo as done", () => {
    todo.add({ id: 1, description: "Learn TDD", status: "todo" });
    todo.add({ id: 2, description: "Read Clean code book", status: "todo" });
    let doneTask = todo.markAsDone(1);
    expect(doneTask.status).toBe("done");
  });
});
