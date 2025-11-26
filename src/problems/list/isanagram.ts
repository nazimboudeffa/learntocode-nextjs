import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeIsAnagram = `function isAnagram(s, t){
  // Write your code here
};`;

const handlerIsAnagram = (fn: any) => {
  try {
    const inputs = [
      { s: "anagram", t: "nagaram" },
      { s: "rat", t: "car" },
      { s: "a", t: "ab" },
    ];
    const outputs = [true, false, false];
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i].s, inputs[i].t);
      assertDeepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("isAnagram handler function error");
    throw new Error(error);
  }
};

export const isAnagram: ProblemElement = {
  id: "isanagram",
  slug: "isanagram",
  title: "Valid Anagram",
  difficulty: "Medium",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, otherwise <code>false</code>.
</p>`,
  examples: [
    { id: 1, inputText: "\"anagram\", \"nagaram\"", outputText: "true" },
    { id: 2, inputText: "\"rat\", \"car\"", outputText: "false" },
  ],
  constraints: `<p class='mt-2'>
  Only lowercase English letters.
</p>`,
  handlerFunction: handlerIsAnagram,
  starterCode: starterCodeIsAnagram,
  order: 14,
  starterFunctionName: "function isAnagram(",
  videoId: "",
  solution: `<p class='mt-3'>
Count characters in one string and subtract using the other (or sort both). Hash counting is O(n) time, O(1) space for fixed alphabet.</p>
<pre><code>function isAnagram(s, t){
  if (s.length !== t.length) return false;
  const cnt = new Map();
  for (const ch of s) cnt.set(ch, (cnt.get(ch)||0)+1);
  for (const ch of t){
    const v = (cnt.get(ch)||0) - 1;
    if (v < 0) return false;
    cnt.set(ch, v);
  }
  return true;
}
</code></pre>`
};
