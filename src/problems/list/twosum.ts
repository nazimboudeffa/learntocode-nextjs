import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeTwoSum = `function twoSum(nums, target){
  // Write your code here
};`;

const handlerTwoSum = (fn: any) => {
  try {
    const inputs = [
      { nums: [2,7,11,15], target: 9 },
      { nums: [3,2,4], target: 6 },
      { nums: [3,3], target: 6 },
    ];
    const outputs = [
      [0,1],
      [1,2],
      [0,1],
    ];
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i].nums, inputs[i].target);
      assertDeepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

export const twoSum: ProblemElement = {
  id: "twosum",
  slug: "twosum",
  title: "Two Sum",
  difficulty: "Medium",
  category: "Array",
  problemStatement: `<p class='mt-3'>
  Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
</p>`,
  examples: [
    { id: 1, inputText: "[2,7,11,15], 9", outputText: "[0,1]" },
    { id: 2, inputText: "[3,2,4], 6", outputText: "[1,2]" },
  ],
  constraints: `<p class='mt-2'>
  Exactly one solution exists; you may not use the same element twice.
</p>`,
  handlerFunction: handlerTwoSum,
  starterCode: starterCodeTwoSum,
  order: 13,
  starterFunctionName: "function twoSum(",
  videoId: "",
  solution: `<p class='mt-3'>
Use a hash map to store value→index while iterating: for each <code>x</code>, check if <code>target - x</code> exists. Time: O(n), Space: O(n).</p>
<pre><code>function twoSum(nums, target){
  const idx = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (idx.has(need)) return [idx.get(need), i];
    idx.set(nums[i], i);
  }
}
</code></pre>`
};
