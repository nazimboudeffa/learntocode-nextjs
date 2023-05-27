'use client'
import Problems from '@/components/Problems'
import LoadingSkeleton from '@/components/Skeletons/LoadingSkeleton';
import { useState } from 'react';

export default function ProblemTable() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
        <Problems />

    </main>
  )
}