import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeReverseString = `function reverseString(s){
  // Write your code here
};`;

const handlerReverseString = (fn: any) => {
  try {
    const inputs = ["hello", "", "abcde", "racecar"];
    const outputs = ["olleh", "", "edcba", "racecar"];
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assertDeepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("reverseString handler function error");
    throw new Error(error);
  }
};

export const reverseString: ProblemElement = {
  id: "reversestring",
  slug: "reversestring",
  title: "Reverse String",
  difficulty: "Easy",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Given a string <code>s</code>, return the string reversed.
</p>`,
  examples: [
    { id: 1, inputText: "\"hello\"", outputText: "\"olleh\"" },
    { id: 2, inputText: "\"racecar\"", outputText: "\"racecar\"", explanation: "Palindrome stays the same" },
  ],
  constraints: `<p class='mt-2'>
  0 ≤ length(s) ≤ 10^4
</p>`,
  handlerFunction: handlerReverseString,
  starterCode: starterCodeReverseString,
  order: 8,
  starterFunctionName: "function reverseString(",
  videoId: "",
  solution: `<p class='mt-3'>
Reverse by iterating from end to start, or split-reverse-join. Time: O(n), Space: O(n).</p>
<pre><code>function reverseString(s){
  return s.split('').reverse().join('');
}
</code></pre>`
};
