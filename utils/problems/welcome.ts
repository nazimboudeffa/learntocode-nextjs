import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeWelcome = `function welcome(num1, num2){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerWelcome = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const num1 = 1
		const num2 = 1
		const answer = 2
		// result is the output of the user's function and answer is the expected output
		const result = fn(num1, num2);
		assert.deepStrictEqual(result, answer);
		return true;
	} catch (error: any) {
		console.log("Welcome handler function error");
		throw new Error(error);
	}
};

export const welcome: Problem = {
	id: "welcome",
	title: "0. Welcome",
	problemStatement: `<p class='mt-3'>
  Welcome to Code 101!
</p>
<p class='mt-3'>
  Nothing to do here, just click the "Run" button to see how this works.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "1, 1",
			outputText: "2",
			explanation: "1+1=2",
		}
	],
	constraints: `<p class='mt-2'>
	No constraints.
</p>`,
	handlerFunction: handlerWelcome,
	starterCode: starterCodeWelcome,
	order: 0,
	starterFunctionName: "function welcome(",
};
