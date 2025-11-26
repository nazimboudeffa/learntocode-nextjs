import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeIsEven = `function isEven(n){
  // Write your code here
};`;

const handlerIsEven = (fn: any) => {
  try {
    const tests = [
      { n: 2, expected: true },
      { n: 3, expected: false },
      { n: 0, expected: true },
      { n: 17, expected: false },
    ];
    for (const test of tests) {
      const result = fn(test.n);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("isEven handler function error");
    throw new Error(error);
  }
};

export const isEven: ProblemElement = {
  id: "iseven",
  slug: "iseven",
  title: "Check if Number is Even",
  difficulty: "Easy",
  category: "Math",
  problemStatement: `<p class='mt-3'>
  Write a function that returns <code>true</code> if a number is even, and <code>false</code> if it's odd.
</p>
<p class='mt-3'>
  This teaches you the modulo operator <code>%</code> and boolean logic.
</p>`,
  examples: [
    { id: 1, inputText: "2", outputText: "true" },
    { id: 2, inputText: "3", outputText: "false" },
    { id: 3, inputText: "0", outputText: "true" },
  ],
  constraints: `<p class='mt-2'>n is an integer.</p>`,
  handlerFunction: handlerIsEven,
  starterCode: starterCodeIsEven,
  order: 2,
  starterFunctionName: "function isEven(",
  videoId: "",
  solution: `<p class='mt-3'>
Use the modulo operator <code>%</code> to check if a number is divisible by 2. Time: O(1), Space: O(1).</p>
<pre><code>function isEven(n){
  return n % 2 === 0;
}
</code></pre>`
};
