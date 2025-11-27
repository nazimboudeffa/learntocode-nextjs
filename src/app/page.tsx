import Navbar from "@/components/Navbar"

const Home = () => {
    return (
      <>
      <Navbar/>
      <main className="bg-[#0d1117] min-h-screen">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 px-6 py-20 sm:px-16 md:py-28 lg:py-32 shadow-2xl rounded-3xl border border-slate-700">
            
            {/* Content */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full">
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 animate-pulse"></span>
                <span className="text-sm text-green-300 font-medium">Free Forever • Interactive Learning</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                Master JavaScript{' '}
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Through Practice
                </span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl leading-8 text-slate-300 max-w-2xl mx-auto">
                Learn to code with interactive challenges, real-time feedback, and a supportive community. 
                No prior experience needed. Start your coding journey today.
              </p>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/problems"
                  className="w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 text-base font-bold text-white shadow-xl hover:shadow-indigo-500/50 transition-all hover:scale-105 active:scale-95"
                >
                  Start Learning Free →
                </a>
                <a 
                  href="https://nazimboudeffa.gumroad.com" 
                  className="w-full sm:w-auto text-center px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors border border-slate-600 rounded-xl hover:border-indigo-500 hover:bg-slate-800/50"
                >
                  Read the Books First
                </a>
              </div>
              
              {/* Stats */}
              <div className="mt-16 pt-8 border-t border-slate-700/50 grid grid-cols-3 gap-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-slate-400 mt-1">Challenges</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3</div>
                  <div className="text-sm text-slate-400 mt-1">Levels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-slate-400 mt-1">Free</div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path Section */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Your Learning Path
              </h2>
              <p className="mt-4 text-slate-400">Master JavaScript step by step</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Beginner */}
              <a href="/problems?difficulty=Easy" className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all hover:scale-105 shadow-lg hover:shadow-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-2xl">
                    🌱
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Beginner</h3>
                    <p className="text-sm text-green-400">Start here</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">Learn the fundamentals: variables, functions, loops, and basic problem solving.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Variables</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Functions</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Loops</span>
                </div>
              </a>

              {/* Intermediate */}
              <a href="/problems?difficulty=Medium" className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all hover:scale-105 shadow-lg hover:shadow-yellow-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Intermediate</h3>
                    <p className="text-sm text-yellow-400">Level up</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">Master arrays, strings, objects, and common algorithms like sorting and searching.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Arrays</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Strings</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Objects</span>
                </div>
              </a>

              {/* Advanced */}
              <a href="/problems?difficulty=Hard" className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-red-500 transition-all hover:scale-105 shadow-lg hover:shadow-red-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Advanced</h3>
                    <p className="text-sm text-red-400">Expert level</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4">Tackle complex challenges, optimize solutions, and prepare for technical interviews.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Algorithms</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Optimization</span>
                  <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">Interview Prep</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      </>
    )
}

export default Home
