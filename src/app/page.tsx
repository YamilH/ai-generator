"use client";
import { useMutation } from "convex/react";
import { useForm } from "react-hook-form"


export default function Home() {

  const saveSketchMutation = useMutation("sketches:saveSketch");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    prompt: string;
  }>();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <form onSubmit={handleSubmit(async(formData) => {
      const results = await saveSketchMutation(formData)
      console.log(results)

    })}>

      <input  {...register("prompt", { required: true })} />

      {errors.prompt && <span>This field is required</span>}

      <input type="submit" />
    </form>
  
    </main>
  )
}
