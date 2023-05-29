import { Problem } from "@/utils/types/problem";

type ProblemDescriptionProps = {
	problem: Problem;
	_solved: boolean;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem, _solved  }) => {
	return (
		<div className='bg-zinc-400'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 overflow-x-hidden bg-zinc-700'>
				<div className={"rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer bg-zinc-400"}>
					Description
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg font-medium'>{problem.title}</div>
						</div>
					</div>
					{/* Problem Statement(paragraphs) */}
					<div className='text-sm'>
						<div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
					</div>

					{/* Examples */}
					<div className='mt-4'>
							{problem.examples.map((example, index) => (
								<div key={example.id}>
									<p className='font-medium'>Example {index + 1}: </p>
									{example.img && <img src={example.img} alt='' className='mt-3' />}
									<div className='example-card'>
										<pre>
											<strong className='text-white'>Input: </strong> {example.inputText}
											<br />
											<strong>Output:</strong>
											{example.outputText} <br />
											{example.explanation && (
												<>
													<strong>Explanation:</strong> {example.explanation}
												</>
											)}
										</pre>
									</div>
								</div>
							))}
						</div>

						{/* Constraints */}
						<div className='my-8 pb-4'>
							<div className='text-sm font-medium'>Constraints:</div>
							<ul className='ml-5 list-disc '>
								<div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
							</ul>
						</div>
				</div>
			</div>
		</div>
	);
};

export default ProblemDescription