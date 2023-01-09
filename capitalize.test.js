import { capitalize } from "./capitalize";

it("Capitalized - a word", () => expect(capitalize("test")).toBe("Test"));

it("Capitalized - a sentence", () =>
  expect(capitalize("this is beautiful")).toBe("This is beautiful"));

it("Capitalized - a mixed upper and lower characters (1)", () =>
  expect(capitalize("this Is beautiful")).toBe("This is beautiful"));

it("Capitalized - a mixed upper and lower characters (2)", () =>
  expect(capitalize("this Is BeaUtiful")).toBe("This is beautiful"));
