import { ProblemElement } from "@/problems/types/problem";

type ProblemDescriptionProps = {
	problem: ProblemElement;
	_solved: boolean;
}

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem, _solved  }) => {
	return (
		<div className='bg-[#0d1117]'>
			{/* TAB */}
			<div className='flex h-12 w-full items-center pt-2 overflow-x-hidden bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg'>
				<div className={"rounded-t-lg px-4 sm:px-6 py-2.5 text-sm font-semibold cursor-pointer bg-slate-800/95 text-indigo-300 shadow-md"}>
					📒 Description
				</div>
			</div>

			<div className='flex px-0 py-6 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-4 sm:px-6 w-full'>
					{/* Problem heading */}
					<div className='w-full mb-6'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-xl sm:text-2xl font-bold text-slate-100 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
								{problem.title}
							</div>
						</div>
					</div>
					{/* Problem Statement(paragraphs) */}
					<div className='text-sm sm:text-base leading-relaxed text-slate-300 bg-slate-800/50 rounded-xl p-6 shadow-md border border-slate-700'>
						<div dangerouslySetInnerHTML={{ __html: problem.problemStatement }} />
					</div>

					{/* Examples */}
					<div className='mt-6 space-y-4'>
							{problem.examples.map((example, index) => (
								<div key={example.id} className='bg-slate-800/50 rounded-xl p-5 shadow-md border border-slate-700 transition-transform hover:scale-[1.01] hover:border-indigo-500'>
									<p className='font-bold text-sm sm:text-base mb-3 text-indigo-400'>💡 Example {index + 1}: </p>
									{example.img && <img src={example.img} alt='' className='mt-3 max-w-full h-auto rounded-lg shadow-sm' />}
									<div className='bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-4 shadow-inner border border-slate-700'>
										<pre className='text-xs sm:text-sm overflow-x-auto text-emerald-300 font-mono'>
											<strong className='text-cyan-300'>Input: </strong> {example.inputText}
											<br />
											<strong className='text-amber-300'>Output: </strong>
											{example.outputText} <br />
											{example.explanation && (
												<>
													<strong className='text-purple-300'>Explanation: </strong> {example.explanation}
												</>
											)}
										</pre>
									</div>
								</div>
							))}
						</div>

						{/* Constraints */}
						<div className='my-6 pb-4 bg-slate-800/50 rounded-xl p-5 shadow-md border border-slate-700'>
							<div className='text-sm sm:text-base font-bold mb-3 text-amber-400'>⚠️ Constraints:</div>
							<ul className='ml-5 list-disc text-xs sm:text-sm text-slate-300 space-y-1'>
								<div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
							</ul>
						</div>
				</div>
			</div>
		</div>
	);
};

export default ProblemDescription