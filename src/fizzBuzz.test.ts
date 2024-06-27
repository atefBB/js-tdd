import { FizzBuzz } from "./fizzBuss";

describe("FizzBuzz", () => {
  it("return Fizz if the index of a given array of n elements is div by 3", () => {
    let fizzBuzz = new FizzBuzz(5);
    expect(fizzBuzz.array[2]).toBe("Fizz");
  });

  it("return Buzz if the index of a given array of n elements is div by 5", () => {
    let fizzBuzz = new FizzBuzz(5);
    expect(fizzBuzz.array[4]).toBe("Buzz");
  });

  it("return FizzBuzz if a the index of a given array of n elements is div by 3 and 5", () => {
    let fizzBuzz = new FizzBuzz(15);
    expect(fizzBuzz.array[14]).toBe("FizzBuzz");
  });

  it("return the index if the index of a given array of n elements if none of above conditions are true", () => {
    let fizzBuzz = new FizzBuzz(5);
    expect(fizzBuzz.array[0]).toBe(fizzBuzz.array[0]);
  });
});
