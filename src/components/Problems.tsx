'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { problemsList } from "@/problems/list";
import { Problem } from "@/problems/types/problem";

interface ProblemsProps {
  difficulty?: string | null;
}

const Problems: React.FC<ProblemsProps> = ({ difficulty }) => {
  const solvedSlugs = useSolvedSlugs();
  
  const filteredProblems = difficulty 
    ? problemsList.filter(p => p.difficulty === difficulty)
    : problemsList;
  
  return (
      <div className='w-full overflow-x-auto'>
        {difficulty && (
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">{difficulty} Problems</h2>
            <p className="text-slate-400">Showing {filteredProblems.length} {difficulty.toLowerCase()} level problems</p>
          </div>
        )}
        <table className='text-sm text-left sm:w-9/12 w-full min-w-[600px] mx-auto bg-slate-800/50 rounded-xl shadow-xl border border-slate-700'>
          <thead className='text-xs text-slate-300 uppercase border-b border-slate-700'>
            <tr className='bg-gradient-to-r from-indigo-600/20 to-purple-600/20'>
              <th scope='col' className='px-1 py-3 w-[50px] font-medium'>Status</th>
              <th scope='col' className='px-3 sm:px-6 py-3 font-medium'>Title</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-[100px] font-medium'>Difficulty</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-[100px] font-medium hidden sm:table-cell'>Category</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-[90px] font-medium'>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {filteredProblems.map((problem: Problem, idx: number) => {
              let difficultyColor = "text-red-400";
              if (problem.difficulty === "Easy") difficultyColor = "text-green-400";
              else if (problem.difficulty === "Medium") difficultyColor = "text-yellow-400";
              const isSolved = solvedSlugs.has(problem.slug);
              return (
                <tr className={`${idx % 2 == 1 ? "bg-slate-800/30" : ""} border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors`} key={problem.id}>
                  <td className='px-2 py-4 font-medium whitespace-nowrap text-green-400 text-center'>
                    {isSolved ? (<BsCheckCircle fontSize={"18"} width='18' />) : (<BsCircle fontSize={"18"} width='18' />)}
                  </td>
                  <td className='px-3 sm:px-6 py-4 text-slate-200'>
                    <Link className='hover:text-indigo-400 cursor-pointer transition-colors' href={`/problems/${problem.slug}`}>
                      {problem.title}
                    </Link>
                  </td>
                  <td className={`px-3 sm:px-6 py-4 ${difficultyColor} font-semibold`}>{problem.difficulty}</td>
                  <td className={'px-3 sm:px-6 py-4 hidden sm:table-cell text-slate-400'}>{problem.category}</td>
                  <td className={'px-3 sm:px-6 py-4'}>
                    <Link className='hover:text-purple-400 cursor-pointer text-xs sm:text-sm text-slate-300 transition-colors font-medium' href={`/problems/${problem.slug}/explanation`}>
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};
export default Problems;

const useSolvedSlugs = () => {
  const [setSolved, setSetSolved] = useState<Set<string>>(new Set());
  useEffect(() => {
    const next = new Set<string>();
    for (const p of problemsList) {
      const val = localStorage.getItem(`solved-${p.slug}`);
      if (val !== null) next.add(p.slug);
    }
    setSetSolved(next);
  }, []);
  return setSolved;
};