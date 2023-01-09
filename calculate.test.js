import { calculate } from "./calculate";

/**
 * A calculator object that contains functions for the basic operations:
 * add, subtract, divide, and multiply. Each of these functions should take
 * two numbers and return the correct calculation.
 */

it("Add", () => expect(calculate.add(1, 2)).toBe(3));
it("Add - negative numbers", () => expect(calculate.add(-1, -2)).toBe(-3));
it("Subtract", () => expect(calculate.subtract(3, 5)).toBe(-2));
it("Subtract - negative numbers", () =>
  expect(calculate.subtract(-1, -8)).toBe(7));
it("Divide", () => expect(calculate.divide(10, 2)).toBe(5));
it("Divide - negative numbers", () =>
  expect(calculate.divide(-10, -2)).toBe(5));
it("Multiply", () => expect(calculate.multiply(10, 2)).toBe(20));
it("Multiply - negative numbers", () =>
  expect(calculate.multiply(-10, -2)).toBe(20));
