'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { problemsList } from "@/problems/list";
import { Problem } from "@/problems/types/problem";

const Problems: React.FC = () => {
  const solvedSlugs = useSolvedSlugs();
  return (
      <div className='w-full overflow-x-auto'>
        <table className='text-sm text-left sm:w-7/12 w-full min-w-[600px] mx-auto'>
          <thead className='text-xs text-gray-700 uppercase border-b '>
            <tr>
              <th scope='col' className='px-1 py-3 w-0 font-medium'>Status</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-0 font-medium'>Title</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-0 font-medium'>Difficulty</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-0 font-medium hidden sm:table-cell'>Category</th>
              <th scope='col' className='px-3 sm:px-6 py-3 w-0 font-medium'>Explanation</th>
            </tr>
          </thead>
          <tbody>
            {problemsList.map((problem: Problem, idx: number) => {
              let difficultyColor = "text-red-400";
              if (problem.difficulty === "Easy") difficultyColor = "text-green-400";
              else if (problem.difficulty === "Medium") difficultyColor = "text-yellow-400";
              const isSolved = solvedSlugs.has(problem.slug);
              return (
                <tr className={`${idx % 2 == 1 ? "bg-zinc-100" : ""}`} key={problem.id}>
                  <td className='px-2 py-4 font-medium whitespace-nowrap text-green-400'>
                    {isSolved ? (<BsCheckCircle fontSize={"18"} width='18' />) : (<BsCircle fontSize={"18"} width='18' />)}
                  </td>
                  <td className='px-3 sm:px-6 py-4'>
                    <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${problem.slug}`}>
                      {problem.title}
                    </Link>
                  </td>
                  <td className={`px-3 sm:px-6 py-4 ${difficultyColor}`}>{problem.difficulty}</td>
                  <td className={'px-3 sm:px-6 py-4 hidden sm:table-cell'}>{problem.category}</td>
                  <td className={'px-3 sm:px-6 py-4'}>
                    <Link className='hover:text-blue-600 cursor-pointer text-xs sm:text-sm' href={`/problems/${problem.slug}/explanation`}>
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