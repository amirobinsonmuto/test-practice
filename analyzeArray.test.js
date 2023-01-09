import { analyzeArray } from "./analyzeArray";

/**
 * An analyzeArray function that takes an array of numbers and returns an object
 * with the following properties: average, min, max, and length.
 */

it("analyzeArray", () => expect(analyzeArray([1, 2, 3]).average).toEqual(2));
it("analyzeArray", () => expect(analyzeArray([1, 2, 3]).min).toEqual(1));
it("analyzeArray", () => expect(analyzeArray([1, 2, 3]).max).toEqual(3));
it("analyzeArray", () => expect(analyzeArray([1, 2, 3]).length).toEqual(3));
