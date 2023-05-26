'use client'

import Workspace from "@/components/Workspace/Workspace";
import useHasMounted from "@/hooks/useHasMounted";
import { Problem } from "@/utils/types/problem";
import { problems } from "@/utils/problems";
import { useState } from "react";

const ProblemPage: React.FC = (context) => {
	const hasMounted = useHasMounted();
	if (!hasMounted) return null;
	const getData = (slug: string) => {
		const problem = problems[slug];
		if (!problem) {
			return false
		}
		problem.handlerFunction = problem.handlerFunction.toString();
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