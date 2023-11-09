import { ProblemElement } from "../types/problem";
export const fizzBuzz: ProblemElement = {
	id: "1",
	slug: "fizzbuzz",
	title: "1. FizzBuzz",
	problemStatement: `<p class='mt-3'>
  FizzBuzz
</p>
<p class='mt-3'>
    This is the FizzBuzz problem
</p>`,
	examples: [
		{
			id: 1,
			inputText: "3",
			outputText: "fizz",
			explanation: "3 is fizz",
		}
	],
	constraints: `<p class='mt-2'>
	No constraints.
</p>`,
	handlerFunction: "",
	starterCode: "",
	order: 0,
	starterFunctionName: "function fizzbuzz(",
};