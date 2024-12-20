"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";




export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold text-center">Welcome to the Emergency Preparedness Quiz</h1>
      <p className="text-xl mt-4">Test your knowledge on emergency preparedness and disaster management</p>
      <img src="https://media.istockphoto.com/id/1204262685/photo/collage-with-examples-of-the-destruction-of-nature-by-humans.jpg?s=612x612&w=0&k=20&c=Vb3n0U89DN4ZbeR5Vztz1TMCoi-9PCi_B4yC5vIIRVU="
        className="mt-4" />
      <div className="mt-4">
        <p className="text-xl">Click below to start the quiz</p>
      </div>
      <div className="mt-4 flex justify-start gap-4">
        <Link href="/question">
          <Button>Start General Quiz</Button>
        </Link>
        <Link href="/flood">
          <Button>Start Flood Quiz</Button>
        </Link>
        <Link href="/earthquake">
          <Button>Start Earthquake Quiz</Button>
        </Link>
        <Link href="/landslide">
          <Button>Start Landslide Quiz</Button>
        </Link>
        <Link href="/drought">
          <Button>Start Drought Quiz</Button>
        </Link>
        <Link href="/wildfires">
          <Button>Start Wildfire Quiz</Button>
        </Link>
      </div>
    </div>
  )
}
