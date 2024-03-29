'use client'

import Split from "react-split"
import ProblemDescription from "./ProblemDescription"
import Playground from "./Playground"
import { ProblemElement } from "@/problems/types/problem"
import useWindowSize from "@/hooks/useWindowSize"
import { useState } from "react"
import Confetti from "react-confetti";
import Navbar from "../Navbar"

type WorkspaceProps = {
	problem: ProblemElement
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
	const { width, height } = useWindowSize();
	const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);
	return (
		<>
		<Navbar />
		<Split className='split' minSize={0}>
			<div>
				<ProblemDescription problem={problem} _solved={solved} />
			</div>
			<div>
				<Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
				{success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
			</div>
		</Split>
		</>
	)
}
export default Workspace
