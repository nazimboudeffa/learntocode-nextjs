'use client'

import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type ProblemPageProps = {
	problem: Problem;
};
 
const ProblemPage: React.FC<ProblemPageProps> = (context) => {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null;
	const problem = getData(context.params.slug)
	return (
		<>
		<Workspace problem={problem} />
		</>
	);

};

export default ProblemPage;

export function getData(slug: string) {
	const problem = problems[slug];
	if (!problem) {
		return false
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return problem
}

// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
	const paths = Object.keys(problems).map((key) => (
		{ slug: key }
	));

	return {
		paths,
		fallback: false,
	};
}