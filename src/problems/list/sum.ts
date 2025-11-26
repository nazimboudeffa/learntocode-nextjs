import { assertDeepStrictEqual } from "@/problems/utils/assert";
import { ProblemElement } from "../types/problem";

const starterCodeSum = `function add(a, b){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerSum = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const a = 1;
		const b = 2;
		const answer = 3;
		const result = fn(a, b);
		assertDeepStrictEqual(result, answer);
		return true;
	} catch (error: any) {
		console.log("Simple Sum handler function error");
		throw new Error(error);
	}
};

export const sum: ProblemElement = {
    id: "sum",
	slug: "sum",
	title: "A Simple Sum",
	difficulty: "Easy",
	category: "Integer",
	problemStatement: `<p class='mt-3'>
  Welcome to Code 101! The place where to learn coding in a friendly and stressless environment.
</p>
<p class='mt-3'>
  In this problem, you will be asked to write a function that adds two numbers together.
</p>
<p class='mt-3'>
  After that just click the "Run" button to see how this works.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "1,2",
			outputText: "3",
			explanation: "1+2=3",
		}
	],
	constraints: `<p class='mt-2'>
	No constraints.
</p>`,
	handlerFunction: handlerSum,
	starterCode: starterCodeSum,
	order: 0,
	starterFunctionName: "function add(",
    videoId: "KxcwwWNx5aA",
	solution: `<p class='mt-3'>
	Addition is straightforward: return <code>a + b</code>. Time: O(1), Space: O(1).
	</p>
	<pre><code>function add(a, b) {
  return a + b;
}
	</code></pre>`
};