import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeLongestSubstring = `function lengthOfLongestSubstring(s){
  // Write your code here
};`;

const handlerLongestSubstring = (fn: any) => {
  try {
    const inputs = ["abcabcbb", "bbbbb", "pwwkew", ""];
    const outputs = [3, 1, 3, 0];
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assertDeepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("lengthOfLongestSubstring handler function error");
    throw new Error(error);
  }
};

export const longestSubstring: ProblemElement = {
  id: "longestsubstring",
  slug: "longestsubstring",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Hard",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Given a string <code>s</code>, find the length of the longest substring without repeating characters.
</p>`,
  examples: [
    { id: 1, inputText: "\"abcabcbb\"", outputText: "3" },
    { id: 2, inputText: "\"bbbbb\"", outputText: "1" },
  ],
  constraints: `<p class='mt-2'>
  0 ≤ length(s) ≤ 10^4
</p>`,
  handlerFunction: handlerLongestSubstring,
  starterCode: starterCodeLongestSubstring,
  order: 16,
  starterFunctionName: "function lengthOfLongestSubstring(",
  videoId: "",
  solution: `<p class='mt-3'>
Sliding window with a map of last seen positions; move left pointer when a duplicate appears. Time: O(n), Space: O(k).</p>
<pre><code>function lengthOfLongestSubstring(s){
  const seen = new Map();
  let best = 0, left = 0;
  for (let right = 0; right < s.length; right++){
    const ch = s[right];
    if (seen.has(ch) && seen.get(ch) >= left) left = seen.get(ch) + 1;
    seen.set(ch, right);
    best = Math.max(best, right - left + 1);
  }
  return best;
}
</code></pre>`
};
