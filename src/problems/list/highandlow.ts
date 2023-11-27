import assert from "assert";
import { ProblemElement } from "../types/problem";

const starterCodeHighAndLow = `function highAndLow(numbers){
	// Write your code here
	return "";
  };`;
  
// checks if the user has the correct code
const handlerHighAndLow= (fn: any) => {
	  // fn is the callback that user's code is passed into
	  try {
		  const nums = ["1 2 3 4 5","1 2 -3 4 5","1 9 3 4 -5","42"];
		  const answers = [
			  "5 1",
			  "5 -3",
			  "9 -5",
			  "42 42"
		  ];
		  for (let i = 0; i < nums.length; i++) {
			  const result = fn(nums[i]);
			  assert.deepStrictEqual(result, answers[i]);
		  }
		  return true;
	  } catch (error: any) {
		  console.log("Fizz Buzz handler function error");
		  throw new Error(error);
	  }
};

export const highAndLow: ProblemElement = {
	id: "2",
	slug: "highandlow",
	title: "2. High and Low",
	problemStatement: `<p class='mt-3'>
	In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
</p>
<p class='mt-3'>
 Found on <a href="https://solers.io">solers.io</a>
</p>`,
	examples: [
		{
			id: 1,
			inputText: "1 2 3 4 5",
			outputText: "5 1",
			explanation: "5 is the highest number and 1 is the lowest number",
		},
		{
			id: 2,
			inputText: "1 2 -3 4 5",
			outputText: "5 -3",
			explanation: "5 is the highest number and -3 is the lowest number",
		},
		{
			id: 3,
			inputText: "1 9 3 4 -5",
			outputText: "9 -5",
			explanation: "9 is the highest number and -5 is the lowest number",
		}
	],
	constraints: `<p class='mt-2'>
	
	<ul>
	<li>All numbers are valid Int32, no need to validate them.</li>
    <li>It will never be null or undefined.</li>
    <li>There will always be at least one number in the input string.</li>
	</ul>

</p>`,
	handlerFunction: handlerHighAndLow,
	starterCode: starterCodeHighAndLow,
	order: 1,
	starterFunctionName: "function highAndLow(",
};