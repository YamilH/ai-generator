import { mutation, query } from "./_generated/server";

export const saveSketch = mutation(
  async ( { db }: { db: any }, { prompt }: { prompt: string }): Promise<{ message: string }> => {
    await db.insert("sketches", {
      prompt
    });

    return {
      message: 'success'
    };
  }
);

export const getSketches = query(async({ db }) => {
  const sketches = await db.query("sketches").collect();
  return sketches;
});

// export const getSketch = query(({ db }, { sketchId }: { sketchId: string }) => {
//   if (!sketchId) return null;
//   return db.get(new Id("sketches", sketchId));
// });