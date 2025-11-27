'use client'

import Split from "react-split"
import ProblemDescription from "./ProblemDescription"
import Playground from "./Playground"
import { ProblemElement } from "@/problems/types/problem"
import { useState, useEffect } from "react"
import Navbar from "../Navbar"

type WorkspaceProps = {
	problem: ProblemElement
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
	const [solved, setSolved] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<>
		<Navbar />
		{isMobile ? (
			<div className='flex flex-col'>
				<div className='h-[50vh] overflow-y-auto'>
					<ProblemDescription problem={problem} _solved={solved} />
				</div>
				<div className='h-[50vh]'>
					<Playground problem={problem} setSolved={setSolved} />
				</div>
			</div>
		) : (
			<Split className='split' minSize={0}>
				<div>
					<ProblemDescription problem={problem} _solved={solved} />
				</div>
				<div>
					<Playground problem={problem} setSolved={setSolved} />
				</div>
			</Split>
		)}
		</>
	)
}
export default Workspace
