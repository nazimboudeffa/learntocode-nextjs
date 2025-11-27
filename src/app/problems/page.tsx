'use client'
import Navbar from '@/components/Navbar';
import Problems from '@/components/Problems'
import { useSearchParams } from 'next/navigation';

export default function ProblemTable() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty');
  
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-12 md:p-24 bg-[#0d1117]">
        <Problems difficulty={difficulty} />
    </main>
    </>
  )
}