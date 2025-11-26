import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeMergeIntervals = `function mergeIntervals(intervals){
  // intervals is an array like [[1,3],[2,6]]
  // Write your code here
};`;

const handlerMergeIntervals = (fn: any) => {
  try {
    const inputs = [
      [[1,3],[2,6],[8,10],[15,18]],
      [[1,4],[4,5]],
    ];
    const outputs = [
      [[1,6],[8,10],[15,18]],
      [[1,5]],
    ];
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assertDeepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("mergeIntervals handler function error");
    throw new Error(error);
  }
};

export const mergeIntervals: ProblemElement = {
  id: "mergeintervals",
  slug: "mergeintervals",
  title: "Merge Intervals",
  difficulty: "Hard",
  category: "Array",
  problemStatement: `<p class='mt-3'>
  Given an array of intervals where <code>intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals and return an array of the non-overlapping intervals.
</p>`,
  examples: [
    { id: 1, inputText: "[[1,3],[2,6],[8,10],[15,18]]", outputText: "[[1,6],[8,10],[15,18]]" },
    { id: 2, inputText: "[[1,4],[4,5]]", outputText: "[[1,5]]" },
  ],
  constraints: `<p class='mt-2'>
  1 ≤ intervals.length ≤ 10^4, intervals[i].length = 2
</p>`,
  handlerFunction: handlerMergeIntervals,
  starterCode: starterCodeMergeIntervals,
  order: 15,
  starterFunctionName: "function mergeIntervals(",
  videoId: "",
  solution: `<p class='mt-3'>
Sort intervals by start, then sweep and merge when current start ≤ last end. Time: O(n log n) due to sort, Space: O(n).</p>
<pre><code>function mergeIntervals(intervals){
  intervals.sort((a,b)=>a[0]-b[0]);
  const res = [];
  for (const [s,e] of intervals){
    if (!res.length || res[res.length-1][1] < s) res.push([s,e]);
    else res[res.length-1][1] = Math.max(res[res.length-1][1], e);
  }
  return res;
}
</code></pre>`
};
