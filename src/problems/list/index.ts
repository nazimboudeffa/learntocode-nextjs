import { ProblemElement } from "@/problems/types/problem";
import { sum } from "./sum";
import { fizzBuzz } from "./fizzbuzz";

interface ProblemMap {
	[key: string]: ProblemElement;
}

export const problems: ProblemMap = {
	"sum": sum,
	"fizzbuzz": fizzBuzz,
};
