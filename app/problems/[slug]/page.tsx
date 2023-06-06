'use client'

import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { Problem } from "@/utils/types/problem";
import { problems } from "@/utils/problems";

const ProblemPage: React.FC = (context : any) => {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null;
	const getData = (slug: string) : Problem => {
		const problem = problems[slug];
		//problem.handlerFunction = problem.handlerFunction.toString();
		return problem
	}
	const problem = getData(context.params.slug)
	return (
		<>
		<Workspace problem={problem} />
		</>
	);

};

export default ProblemPage;