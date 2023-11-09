import assert from "assert";
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
		const answer = 2;

		const result = fn(a, b);
		console.log(result);
		assert.deepStrictEqual(result, answer);
		return true;
	} catch (error: any) {
		console.log("Simple Sum handler function error");
		throw new Error(error);
	}
};

export const sum: ProblemElement = {
    id: "0",
	slug: "sum",
	title: "0. A Simple Sum",
	problemStatement: `<p class='mt-3'>
  Welcome to Code 101!
</p>
<p class='mt-3'>
  In this problem, you will be asked to write a function that adds two numbers together.
  After that just click the "Run" button to see how this works.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "1, 2",
			outputText: "3",
			explanation: "1+1=2",
		}
	],
	constraints: `<p class='mt-2'>
	No constraints.
</p>`,
	handlerFunction: handlerSum,
	starterCode: starterCodeSum,
	order: 0,
	starterFunctionName: "function sum(",
};