import assert from "assert";
import { ProblemElement } from "../types/problem";

const starterCodeFizzBuzz = `function fizzbuzz(n){
	// Write your code here
  };`;
  
// checks if the user has the correct code
const handlerFizzBuzz = (fn: any) => {
	  // fn is the callback that user's code is passed into
	  try {
		  const nums = [3,5,15];
		  const answers = [
			  [1, 2,'Fizz'],
			  [1, 2,'Fizz',4,'Buzz'],
			  [1, 2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']
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

export const fizzBuzz: ProblemElement = {
	id: "1",
	slug: "fizzbuzz",
	title: "1. Fizz Buzz",
	problemStatement: `<p class='mt-3'>
	This is the very known Fizz Buzz problem
</p>
<p class='mt-3'>
	Return an array containing the numbers from 1 to N, where N is the parametered value.
</p>
<p class='mt-3'>
	But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”.
</p>
<p class='mt-3'>
	For numbers which are multiples of both three and five use “FizzBuzz”.
</p>
<p class='mt-3'>
	For example, if you pass in 15, the output should be: <code>[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]</code>
</p>
<p class='mt-3'>
	After that just click the "Run" button to see how this works.
</p>`,
	examples: [
		{
			id: 1,
			inputText: "[1,2,3]",
			outputText: "[1,2,'Fizz']",
			explanation: "3 is Fizz",
		},
		{
			id: 2,
			inputText: "[1,2,3,4,5]",
			outputText: "[1,2,'Fizz',4,'Buzz']",
			explanation: "3 is Fizz and 5 is Buzz",
		},
		{
			id: 3,
			inputText: "[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]",
			outputText: "[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']",
			explanation: "multiples of 3 is Fizz and multiples of 5 is Buzz, so 15 is multiple of 3 and 5 is FizzBuzz",
		}
	],
	constraints: `<p class='mt-2'>
	N will never be less than 1.
</p>`,
	handlerFunction: handlerFizzBuzz,
	starterCode: starterCodeFizzBuzz,
	order: 1,
	starterFunctionName: "function fizzbuzz(",
};