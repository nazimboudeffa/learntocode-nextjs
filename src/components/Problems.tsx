'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";
import { problems } from "@/problems";
import LoadingSkeleton from "./Skeletons/LoadingSkeleton";

type solvedType = {
	slug: string,
	solved: string | null
}[]

const Problems: React.FC = () => {
	const [loadingSolvedProblems, setLoadingSolvedProblems] = useState<boolean>(false);
	const [youtubePlayer, setYoutubePlayer] = useState({
		isOpen: false,
		videoId: "",
	});
	const closeModal = () => {
		setYoutubePlayer({ isOpen: false, videoId: "" })
	};
	useEffect(() => {
		localStorage.setItem(`solved-welcome`, "true");
	}, []);
	const solvedProblems = useGetSolvedProblems();
	return ( 
		<>
		{loadingSolvedProblems && (
			<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
			{[...Array(10)].map((_, idx) => (
			<LoadingSkeleton key={idx} />
			))}
			</div>
		)} 
		{!loadingSolvedProblems && (
		<>
		<table className='text-sm text-left sm:w-7/12 w-full max-w mx-auto'>
		<thead className='text-xs text-gray-700 uppercase border-b '>
            <tr>
              <th scope='col' className='px-1 py-3 w-0 font-medium'>
                Status
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Title
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Difficulty
              </th>

              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Category
              </th>
              <th scope='col' className='px-6 py-3 w-0 font-medium'>
                Solution
              </th>
            </tr>
        </thead>			
		<tbody>
		{problems.map((problem : Problem, idx : number) => {
			const difficulyColor = problem.difficulty === "Easy" ? "text-green-400" : problem.difficulty === "Medium" ? "text-yellow-400" : "text-red-400";
			return (<tr className={`${idx % 2 == 1 ? "bg-zinc-100" : ""}`} key={problem.id}>
				<td className='px-2 py-4 font-medium whitespace-nowrap text-green-400'>
					{ (!(solvedProblems.length===0)&& (solvedProblems[idx].solved === "true"))  ? (<BsCheckCircle fontSize={"18"} width='18' />) : (<BsCircle fontSize={"18"} width='18' />)}
				</td>
				<td className='px-6 py-4'>
					<Link
						className='hover:text-blue-600 cursor-pointer'
						href={`/problems/${problem.slug}`}
					>
						{problem.title}
					</Link>
				</td>
				<td className={`px-6 py-4 ${difficulyColor}`}>{problem.difficulty}</td>
				<td className={"px-6 py-4"}>{problem.category}</td>
				<td className={"px-6 py-4"}>
					{problem.videoId ? (
						<AiFillYoutube
							fontSize={"28"}
							className='cursor-pointer hover:text-red-600'
							onClick={() =>
								setYoutubePlayer({ isOpen: true, videoId: problem.videoId as string })
							}
						/>
					) : (
						<p>Coming soon</p>
					)}
				</td>
			</tr>)})}
		</tbody>
		</table>
		</>
		)}
		{youtubePlayer.isOpen && (
			<div className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
				<div
					className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute'
					onClick={closeModal}
				></div>
				<div className='w-full z-50 h-full px-6 relative max-w-4xl'>
					<div className='w-full h-full flex items-center justify-center relative'>
						<div className='w-full relative'>
							<IoClose
								fontSize={"35"}
								className='cursor-pointer absolute -top-16 right-0'
								onClick={closeModal}
							/>
							<YouTube
								videoId={youtubePlayer.videoId}
								loading='lazy'
								iframeClassName='w-full min-h-[500px]'
							/>
						</div>
					</div>
				</div>
			</div>
		)}		
		</>
	);
};
export default Problems

const useGetSolvedProblems = () => {
	const [solvedProblems, setSolvedProblems] = useState<solvedType>([]);
	useEffect(() => {
		const getSolvedProblems = async () => {
			let solved : solvedType = [];
			let len = problems.length;
			for (let i = 0; i < len; i++) {
				solved.push({
					slug: problems[i].slug,
					solved: localStorage.getItem(`solved-${problems[i].slug}`)
				});
			}
			setSolvedProblems(solved);
		};
		getSolvedProblems();
	}, []);
	return solvedProblems;
}