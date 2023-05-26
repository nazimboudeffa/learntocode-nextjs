'use client'
import Problems from '@/components/Problems'
import { useState } from 'react';

export default function ProblemTable() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {loadingProblems && (
          <div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
            {[...Array(10)].map((_, idx) => (
              <LoadingSkeleton key={idx} />
            ))}
          </div>
        )}
      <table className='text-sm text-left sm:w-7/12 w-full max-w mx-auto'>
        {!loadingProblems && (
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
        )}
        <Problems setLoadingProblems={setLoadingProblems}/>
      </table>
    </main>
  )
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-zinc-400'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-zinc-400'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-zinc-400'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-zinc-400'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};