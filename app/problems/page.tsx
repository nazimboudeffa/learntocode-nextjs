'use client'
import Navbar from '@/components/Navbar';
import Problems from '@/components/Problems'

export default function ProblemTable() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Problems />
    </main>
    </>
  )
}