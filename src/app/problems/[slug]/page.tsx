'use client'

import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { Problem, ProblemElement } from "@/problems/types/problem";
import { problems } from "@/problems/list";

const ProblemPage: React.FC = (context : any) => {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null;
	const getData = (slug: string) : ProblemElement => {
		const problem = problems[slug];
		return problem;
	}
	const problem = getData(context.params.slug)
	return (
		<Workspace problem={problem} />
	);

};

export default ProblemPage;