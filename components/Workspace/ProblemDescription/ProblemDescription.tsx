import { Problem } from "@/utils/types/problem";

type ProblemDescriptionProps = {
	problem: Problem;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ( { problem } ) => {
	return (
		<div className='bg-dark-layer-1'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-screen overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg font-medium'>{problem?.title}</div>
						</div>
					</div>
					{/* Problem Statement(paragraphs) */}
					<div className='text-sm'>
						<div dangerouslySetInnerHTML={{ __html: problem?.problemStatement }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProblemDescription