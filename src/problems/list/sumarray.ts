import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeSumArray = `function sumArray(arr){
  // Write your code here
};`;

const handlerSumArray = (fn: any) => {
  try {
    const tests = [
      { arr: [1, 2, 3], expected: 6 },
      { arr: [10, -5, 5], expected: 10 },
      { arr: [], expected: 0 },
    ];
    for (const test of tests) {
      const result = fn(test.arr);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("sumArray handler function error");
    throw new Error(error);
  }
};

export const sumArray: ProblemElement = {
  id: "sumarray",
  slug: "sumarray",
  title: "Sum All Numbers in Array",
  difficulty: "Easy",
  category: "Array",
  problemStatement: `<p class='mt-3'>
  Write a function that returns the sum of all numbers in an array.
</p>
<p class='mt-3'>
  This teaches you array iteration and accumulation.
</p>`,
  examples: [
    { id: 1, inputText: "[1, 2, 3]", outputText: "6" },
    { id: 2, inputText: "[10, -5, 5]", outputText: "10" },
    { id: 3, inputText: "[]", outputText: "0" },
  ],
  constraints: `<p class='mt-2'>No constraints.</p>`,
  handlerFunction: handlerSumArray,
  starterCode: starterCodeSumArray,
  order: 4,
  starterFunctionName: "function sumArray(",
  videoId: "",
  solution: `<p class='mt-3'>
Initialize sum to 0, loop through array and add each element. Time: O(n), Space: O(1).</p>
<pre><code>function sumArray(arr){
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
</code></pre>`
};
