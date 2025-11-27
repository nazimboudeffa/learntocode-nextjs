'use client'
import Navbar from '@/components/Navbar';
import Problems from '@/components/Problems'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ProblemsContent() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty');
  
  return <Problems difficulty={difficulty} />;
}

export default function ProblemTable() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-12 md:p-24 bg-[#0d1117]">
        <Suspense fallback={<div className="text-white">Loading...</div>}>
          <ProblemsContent />
        </Suspense>
    </main>
    </>
  )
}