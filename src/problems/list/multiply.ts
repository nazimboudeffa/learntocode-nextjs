import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeMultiply = `function multiply(a, b){
  // Write your code here
};`;

const handlerMultiply = (fn: any) => {
  try {
    const tests = [
      { a: 2, b: 3, expected: 6 },
      { a: 5, b: 4, expected: 20 },
      { a: 0, b: 10, expected: 0 },
    ];
    for (const test of tests) {
      const result = fn(test.a, test.b);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("Multiply handler function error");
    throw new Error(error);
  }
};

export const multiply: ProblemElement = {
  id: "multiply",
  slug: "multiply",
  title: "Multiply Two Numbers",
  difficulty: "Easy",
  category: "Math",
  problemStatement: `<p class='mt-3'>
  Write a function that takes two numbers and returns their product (multiplication).
</p>
<p class='mt-3'>
  This teaches you the basic multiplication operator in JavaScript.
</p>`,
  examples: [
    { id: 1, inputText: "2, 3", outputText: "6" },
    { id: 2, inputText: "5, 4", outputText: "20" },
  ],
  constraints: `<p class='mt-2'>No constraints.</p>`,
  handlerFunction: handlerMultiply,
  starterCode: starterCodeMultiply,
  order: 1,
  starterFunctionName: "function multiply(",
  videoId: "",
  solution: `<p class='mt-3'>
Use the <code>*</code> operator to multiply two numbers. Time: O(1), Space: O(1).</p>
<pre><code>function multiply(a, b){
  return a * b;
}
</code></pre>`
};
