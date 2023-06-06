type EditorFooterProps = {
	handleRun: () => void;
	handleSubmit: () => void;
};

const EditorFooter: React.FC<EditorFooterProps> = ({ handleRun, handleSubmit }) => {
	return (
		<div className='flex bg-zinc-400 absolute bottom-0 z-10 w-full'>
			<div className='mx-5 my-[10px] flex justify-between w-full'>
				{/* here goes the console */}
				<div className='ml-auto flex items-center space-x-4'>
					<button
						className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex rounded-lg bg-green-400'
						onClick={handleRun}
					>
						Run
					</button>
					<button
						className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm rounded-lg bg-red-400'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};
export default EditorFooter;
