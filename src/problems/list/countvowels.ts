import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeCountVowels = `function countVowels(s){
  // Write your code here
};`;

const handlerCountVowels = (fn: any) => {
  try {
    const tests = [
      { s: "hello", expected: 2 },
      { s: "aeiou", expected: 5 },
      { s: "xyz", expected: 0 },
      { s: "JavaScript", expected: 3 },
    ];
    for (const test of tests) {
      const result = fn(test.s);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("countVowels handler function error");
    throw new Error(error);
  }
};

export const countVowels: ProblemElement = {
  id: "countvowels",
  slug: "countvowels",
  title: "Count Vowels in String",
  difficulty: "Easy",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Write a function that counts the number of vowels (a, e, i, o, u) in a string.
</p>
<p class='mt-3'>
  Count both lowercase vowels. This teaches loops and string manipulation.
</p>`,
  examples: [
    { id: 1, inputText: "\"hello\"", outputText: "2", explanation: "e and o" },
    { id: 2, inputText: "\"aeiou\"", outputText: "5" },
    { id: 3, inputText: "\"xyz\"", outputText: "0" },
  ],
  constraints: `<p class='mt-2'>Only lowercase letters.</p>`,
  handlerFunction: handlerCountVowels,
  starterCode: starterCodeCountVowels,
  order: 9,
  starterFunctionName: "function countVowels(",
  videoId: "",
  solution: `<p class='mt-3'>
Loop through each character and check if it's a vowel. Time: O(n), Space: O(1).</p>
<pre><code>function countVowels(s){
  const vowels = 'aeiou';
  let count = 0;
  for (const ch of s) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}
</code></pre>`
};
