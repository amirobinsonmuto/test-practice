import { reverseString } from "./reverseString";

it("Reversed - a word", () =>
  expect(reverseString("robinson")).toBe("nosnibor"));

it("Reversed - a sentence", () =>
  expect(reverseString("My name is Ami Robinson.")).toBe(
    ".nosniboR imA si eman yM"
  ));
