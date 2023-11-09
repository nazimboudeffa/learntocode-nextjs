import { ProblemElement } from "@/problems/types/problem";
import { sum } from "@/problems/list/sum";
import { fizzBuzz } from "@/problems/list/fizzbuzz";

interface ProblemMap {
	[key: string]: ProblemElement;
}

export const problems: ProblemMap = {
	"sum": sum,
	"fizzbuzz": fizzBuzz,
};
