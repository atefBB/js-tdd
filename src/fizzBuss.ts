export class FizzBuzz {
  array: Array<string | number> = [];
  constructor(n: number) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.array.push("FizzBuzz");
      } else if (i % 5 === 0) {
        this.array.push("Buzz");
      } else if (i % 3 === 0) {
        this.array.push("Fizz");
      } else {
        this.array.push(i);
      }
    }
  }
}
