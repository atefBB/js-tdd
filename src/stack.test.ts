import { Stack } from "./stack";

describe("My Stack", () => {
  let stack: Stack<any>;

  beforeEach(() => {
    stack = new Stack<any>();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push item to the top", () => {
    stack.push("one");
    expect(stack.top).toBe(0);
    expect(stack.peek()).toBe("one");
  });

  it("can remove item from the top", () => {
    stack.push("one");
    const lastTop = stack.top;
    const popped = stack.pop();
    expect(popped).toBe("one");
    expect(stack.top).toBe(lastTop - 1);
    expect(stack.peek()).toBeUndefined();
  });
});
