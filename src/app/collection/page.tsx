"use client";

import { useQuery } from "convex/react";

export default function Home() {
  const saveSketchMutation = useQuery("sketches:getSketches");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Recent Sketches</h2>
      <div className="grid grid-cols-4 gap-4">
        {saveSketchMutation?.map((sketch) => (
          <div key={sketch._id}>{sketch.prompt}</div>
        ))}
      </div>
    </main>
  );
}