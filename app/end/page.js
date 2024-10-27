"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function End() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold text-center">Congratulations</h1>
        <p className="text-xl mt-4">You have successfully completed an Emergency Prepardness Quiz</p>
        <div className="mt-4">
          <p className="text-xl">Click below to return to home page and try other quizes!</p>
        </div>
        <div className="mt-4">
          <Link href="/">
            <Button>Restart Quiz</Button>
          </Link>
        </div>
      </div>
    )
  }