interface StackInterface<T> {
  push(value: T): void;
  peek(): T | undefined;
  pop(): T | undefined;
}

export class Stack<T> implements StackInterface<T> {
  top = -1;
  items: { [key: number]: T } = {};

  push(value: T) {
    this.top += 1;
    this.items[this.top] = value;
  }

  peek() {
    return this.items[this.top];
  }

  pop() {
    if (this.top === -1) {
      return undefined;
    }
    const value = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return value;
  }
}
