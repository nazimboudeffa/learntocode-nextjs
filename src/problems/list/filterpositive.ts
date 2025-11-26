import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeFilterPositive = `function filterPositive(arr){
  // Write your code here
};`;

const handlerFilterPositive = (fn: any) => {
  try {
    const tests = [
      { arr: [1, -2, 3, -4, 5], expected: [1, 3, 5] },
      { arr: [-1, -2, -3], expected: [] },
      { arr: [10, 20], expected: [10, 20] },
    ];
    for (const test of tests) {
      const result = fn(test.arr);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("filterPositive handler function error");
    throw new Error(error);
  }
};

export const filterPositive: ProblemElement = {
  id: "filterpositive",
  slug: "filterpositive",
  title: "Filter Positive Numbers",
  difficulty: "Easy",
  category: "Array",
  problemStatement: `<p class='mt-3'>
  Write a function that returns a new array containing only the positive numbers from the input array.
</p>
<p class='mt-3'>
  This teaches you array filtering and conditional logic.
</p>`,
  examples: [
    { id: 1, inputText: "[1, -2, 3, -4, 5]", outputText: "[1, 3, 5]" },
    { id: 2, inputText: "[-1, -2, -3]", outputText: "[]" },
    { id: 3, inputText: "[10, 20]", outputText: "[10, 20]" },
  ],
  constraints: `<p class='mt-2'>No constraints.</p>`,
  handlerFunction: handlerFilterPositive,
  starterCode: starterCodeFilterPositive,
  order: 6,
  starterFunctionName: "function filterPositive(",
  videoId: "",
  solution: `<p class='mt-3'>
Loop through and add only positive numbers to result array, or use <code>arr.filter(x => x > 0)</code>. Time: O(n), Space: O(n).</p>
<pre><code>function filterPositive(arr){
  const result = [];
  for (const num of arr) {
    if (num > 0) result.push(num);
  }
  return result;
}
</code></pre>`
};
