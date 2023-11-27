import { ProblemElement } from "@/problems/types/problem";
import { sum } from "./sum";
import { fizzBuzz } from "./fizzbuzz";
import { highAndLow } from "./highandlow";

interface ProblemMap {
	[key: string]: ProblemElement;
}

export const problems: ProblemMap = {
	"sum": sum,
	"fizzbuzz": fizzBuzz,
	"highandlow": highAndLow,
};
