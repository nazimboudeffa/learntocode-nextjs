import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeMaxNumber = `function maxNumber(arr){
  // Write your code here
};`;

const handlerMaxNumber = (fn: any) => {
  try {
    const tests = [
      { arr: [1, 5, 3, 9, 2], expected: 9 },
      { arr: [10], expected: 10 },
      { arr: [-5, -1, -10], expected: -1 },
    ];
    for (const test of tests) {
      const result = fn(test.arr);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("maxNumber handler function error");
    throw new Error(error);
  }
};

export const maxNumber: ProblemElement = {
  id: "maxnumber",
  slug: "maxnumber",
  title: "Find Maximum in Array",
  difficulty: "Easy",
  category: "Array",
  problemStatement: `<p class='mt-3'>
  Write a function that finds and returns the maximum number in an array.
</p>
<p class='mt-3'>
  This teaches you how to work with arrays and comparison operators.
</p>`,
  examples: [
    { id: 1, inputText: "[1, 5, 3, 9, 2]", outputText: "9" },
    { id: 2, inputText: "[10]", outputText: "10" },
    { id: 3, inputText: "[-5, -1, -10]", outputText: "-1" },
  ],
  constraints: `<p class='mt-2'>Array will always have at least one element.</p>`,
  handlerFunction: handlerMaxNumber,
  starterCode: starterCodeMaxNumber,
  order: 5,
  starterFunctionName: "function maxNumber(",
  videoId: "",
  solution: `<p class='mt-3'>
Start with the first element as max, then loop and update if you find a larger value. Or use <code>Math.max(...arr)</code>. Time: O(n), Space: O(1).</p>
<pre><code>function maxNumber(arr){
  let max = arr[0];
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}
</code></pre>`
};
