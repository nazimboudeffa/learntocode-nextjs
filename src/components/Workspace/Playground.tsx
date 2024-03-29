import { useEffect, useState } from "react";
import PreferenceNav from "./PreferenceNav";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { ProblemElement } from "@/problems/types/problem";
import EditorFooter from "./EditorFooter";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { problems } from "@/problems/list";

type PlaygroundProps = {
	problem: ProblemElement;
	setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
	setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ISettings {
	fontSize: string;
	settingsModalIsOpen: boolean;
	dropdownIsOpen: boolean;
}

const Playground: React.FC<PlaygroundProps> = ({ problem, setSuccess, setSolved }) => {
	const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
	let [userCode, setUserCode] = useState<string>(problem.starterCode);
	const [settings, setSettings] = useState<ISettings>({
		fontSize: "14px",
		settingsModalIsOpen: false,
		dropdownIsOpen: false,
	});

	const handleSubmit = async () => {
		try {
			userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
			const cb = new Function(`return ${userCode}`)();
			const handler = problems[problem.slug].handlerFunction;
			if (typeof handler === "function") {
				const success = handler(cb);
				if (success) {
					toast.success("Congrats! All tests passed", {
						position: "top-center",
						autoClose: 3000,
						theme: "dark",
					});
					setSuccess(true);
					setTimeout(() => {
						setSuccess(false);
					}, 4000);
					setSolved(true);
					localStorage.setItem(`solved-${problem.slug}`, "solved");
				}
			}
		} catch (error: any) {
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		}
	}

	const handleRun = async () => {
		try {
			userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
			const cb = new Function(`return ${userCode}`)();
			console.log(cb);
			const handler = problems[problem.slug].handlerFunction;
			console.log(handler);
			if (typeof handler === "function") {
				const success = handler(cb);
				if (success) {
					toast.success("It works! Try to submit", {
						position: "top-center",
						autoClose: 3000,
						theme: "dark",
					});
				}
			}
		} catch (error: any) {
			if (
				error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
			) {
				toast.error("Oops! One or more test cases failed", {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			} else {
				toast.error(error.message, {
					position: "top-center",
					autoClose: 3000,
					theme: "dark",
				});
			}
		}
	}

	useEffect(() => {
		const code = localStorage.getItem(`code-${problem.id}`);
		setUserCode(code ? JSON.parse(code) : problem.starterCode)
	}, [problem.id, problem.starterCode]);

	const onChange = (value: string) => {
		setUserCode(value)
		localStorage.setItem(`code-${problem.id}`, JSON.stringify(value))
	}

	return (
		<div className='flex flex-col bg-zinc-400 relative overflow-x-hidden'>
			<PreferenceNav settings={settings} setSettings={setSettings} />

			<Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60, 40]} minSize={60}>
				<div className='w-full overflow-auto'>
					<CodeMirror
						value={userCode}
						theme={githubLight}
						onChange={onChange}
						extensions={[javascript()]}
						style={{ fontSize: settings.fontSize }}
					/>
				</div>
				<div className='w-full px-5 overflow-auto'>
					{/* testcase heading */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5'>Testcases</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

					<div className='flex'>
						{problem.examples.map((example, index) => (
							<div
								className='mr-2 items-start mt-2 '
								key={example.id}
								onClick={() => setActiveTestCaseId(index)}
							>
								<div className='flex flex-wrap items-center gap-y-4'>
									<div
										className={`font-medium items-center transition-all focus:outline-none inline-flex bg-zinc-300 hover:bg-zinc-100 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-grey-100" : "text-gray-500"}
									`}
									>
										Case {index + 1}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='font-semibold my-4'>
						<p className='text-sm font-medium mt-4'>Input:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-zinc-100 border-transparent mt-2'>
							{problem.examples[activeTestCaseId].inputText}
						</div>
						<p className='text-sm font-medium mt-4'>Output:</p>
						<div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-zinc-100 border-transparent mt-2'>
							{problem.examples[activeTestCaseId].outputText}
						</div>
					</div>
				</div>
			</Split>
			<ToastContainer />
			<EditorFooter handleRun={handleRun} handleSubmit={handleSubmit} />
		</div>
	);
};
export default Playground;
