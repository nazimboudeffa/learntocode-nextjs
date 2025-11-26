import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeRepeatString = `function repeatString(s, n){
  // Write your code here
};`;

const handlerRepeatString = (fn: any) => {
  try {
    const tests = [
      { s: "a", n: 3, expected: "aaa" },
      { s: "hi", n: 2, expected: "hihi" },
      { s: "x", n: 0, expected: "" },
    ];
    for (const test of tests) {
      const result = fn(test.s, test.n);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("repeatString handler function error");
    throw new Error(error);
  }
};

export const repeatString: ProblemElement = {
  id: "repeatstring",
  slug: "repeatstring",
  title: "Repeat String N Times",
  difficulty: "Easy",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Write a function that repeats a given string <code>s</code> exactly <code>n</code> times.
</p>
<p class='mt-3'>
  This teaches you loops and string concatenation.
</p>`,
  examples: [
    { id: 1, inputText: "\"a\", 3", outputText: "\"aaa\"" },
    { id: 2, inputText: "\"hi\", 2", outputText: "\"hihi\"" },
    { id: 3, inputText: "\"x\", 0", outputText: "\"\"" },
  ],
  constraints: `<p class='mt-2'>n ≥ 0</p>`,
  handlerFunction: handlerRepeatString,
  starterCode: starterCodeRepeatString,
  order: 7,
  starterFunctionName: "function repeatString(",
  videoId: "",
  solution: `<p class='mt-3'>
Use a loop to concatenate the string n times, or use <code>s.repeat(n)</code>. Time: O(n), Space: O(n).</p>
<pre><code>function repeatString(s, n){
  let result = '';
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}
</code></pre>`
};
