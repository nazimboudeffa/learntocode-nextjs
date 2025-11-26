import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeFirstLetter = `function firstLetter(s){
  // Write your code here
};`;

const handlerFirstLetter = (fn: any) => {
  try {
    const tests = [
      { s: "hello", expected: "h" },
      { s: "JavaScript", expected: "J" },
      { s: "a", expected: "a" },
    ];
    for (const test of tests) {
      const result = fn(test.s);
      assertDeepStrictEqual(result, test.expected);
    }
    return true;
  } catch (error: any) {
    console.log("firstLetter handler function error");
    throw new Error(error);
  }
};

export const firstLetter: ProblemElement = {
  id: "firstletter",
  slug: "firstletter",
  title: "Get First Letter",
  difficulty: "Easy",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Write a function that returns the first character of a string.
</p>
<p class='mt-3'>
  This teaches you string indexing and character access.
</p>`,
  examples: [
    { id: 1, inputText: "\"hello\"", outputText: "\"h\"" },
    { id: 2, inputText: "\"JavaScript\"", outputText: "\"J\"" },
  ],
  constraints: `<p class='mt-2'>String will always have at least one character.</p>`,
  handlerFunction: handlerFirstLetter,
  starterCode: starterCodeFirstLetter,
  order: 3,
  starterFunctionName: "function firstLetter(",
  videoId: "",
  solution: `<p class='mt-3'>
Access the first character using bracket notation <code>s[0]</code>. Time: O(1), Space: O(1).</p>
<pre><code>function firstLetter(s){
  return s[0];
}
</code></pre>`
};
