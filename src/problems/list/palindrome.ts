import { ProblemElement } from "../types/problem";
import { assertDeepStrictEqual } from "@/problems/utils/assert";

const starterCodeIsPalindrome = `function isPalindrome(s){
  // Write your code here
};`;

const handlerIsPalindrome = (fn: any) => {
  try {
    const inputs = ["racecar", "hello", "abba", "a"];
    const outputs = [true, false, true, true];
    for (let i = 0; i < inputs.length; i++) {
      const result = fn(inputs[i]);
      assertDeepStrictEqual(result, outputs[i]);
    }
    return true;
  } catch (error: any) {
    console.log("isPalindrome handler function error");
    throw new Error(error);
  }
};

export const palindrome: ProblemElement = {
  id: "palindrome",
  slug: "palindrome",
  title: "Is Palindrome",
  difficulty: "Easy",
  category: "String",
  problemStatement: `<p class='mt-3'>
  Given a string <code>s</code>, return <code>true</code> if <code>s</code> is a palindrome, otherwise <code>false</code>.
</p>`,
  examples: [
    { id: 1, inputText: "\"racecar\"", outputText: "true" },
    { id: 2, inputText: "\"hello\"", outputText: "false" },
  ],
  constraints: `<p class='mt-2'>
  Consider the string as-is (case-sensitive, no normalization).
</p>`,
  handlerFunction: handlerIsPalindrome,
  starterCode: starterCodeIsPalindrome,
  order: 10,
  starterFunctionName: "function isPalindrome(",
  videoId: "",
  solution: `<p class='mt-3'>
Use two-pointer from both ends and compare characters, or compare with its reverse. Time: O(n), Space: O(1) with two-pointers.</p>
<pre><code>function isPalindrome(s){
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++; j--;
  }
  return true;
}
</code></pre>`
};
