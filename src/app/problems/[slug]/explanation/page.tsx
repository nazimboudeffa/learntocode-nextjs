import { use } from "react";
import Navbar from "@/components/Navbar";
import { problems } from "@/problems/list";

export default function ProblemExplanationPage(context: any) {
  const params: { slug: string } = use(context.params);
  const slug = params.slug;
  const problem = problems[slug];
  if (!problem) {
    return (
      <main className="min-h-screen p-8">
        <Navbar />
        <div className="mx-auto max-w-3xl py-10">
          <h1 className="text-xl font-semibold">Not found</h1>
          <p className="mt-2 text-sm text-gray-600">No problem found for slug: {slug}</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl py-10 px-6">
          <h1 className="text-2xl font-bold">{problem.title} — Explanation</h1>
          <p className="mt-2 text-sm text-gray-600">Difficulty: {problem.difficulty} • Category: {problem.category}</p>
          
          {problem.videoId ? (
            <div className="mt-6 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${problem.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg border-0"
              ></iframe>
            </div>
          ) : (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center text-gray-600">
              Video Coming Soon
            </div>
          )}

          <div className="prose prose-sm max-w-none mt-6">
            {problem.solution ? (
              <div dangerouslySetInnerHTML={{ __html: problem.solution }} />
            ) : (
              <p>No explanation provided yet.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
