import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeWelcome = `function welcome(num1, num2){
  // Write your code here
  return num1+num2;
};`;

// checks if the user has the correct code
const handlerWelcome = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[1,1]
		];
		const targets = [2];
		const answers = [
			[2]
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i], targets[i]);
			console.log(result)
			assert.deepStrictEqual(result, answers[i]);
		}
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
