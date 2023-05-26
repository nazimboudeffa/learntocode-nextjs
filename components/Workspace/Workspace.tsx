'use client'

import Split from "react-split"
import ProblemDescription from "./ProblemDescription/ProblemDescription"
import Playground from "./Playground/Playground"
import { Problem } from "@/utils/types/problem"

type WorkspaceProps = {
	problem: Problem
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {

	return (
		<Split className='split'>
			<div> 
				<ProblemDescription problem={problem} />
			</div>
			<div>
				<Playground problem={problem} />
			</div>
		</Split>
	)
}
export default Workspace
